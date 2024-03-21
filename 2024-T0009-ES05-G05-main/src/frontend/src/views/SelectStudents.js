import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddStudentPopup from '../components/AddStudentPopup';
import { fetchStudentsFromClass, fetchStudent } from '../services/studentsService'; // Importa a função fetchStudentsFromClass
import { useNavigate } from 'react-router-dom';
import DropDown from "../components/DropDown";
import { useProgram } from '../contexts/ProgramContext';

const ContainerSelectStudents = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-self: flex-end;
`;

const ContainerSearchAndOrder = styled.div`
    display: flex;
    justify-content: center;
    width: 89%;
`;

const ContainerSearchBar = styled.div`
    display: flex;
    column-direction: row;
    width: 100%;
    margin-top: 2%;
    margin-bottom: -2%;
`;

const SearchBar = styled.input`
    background-color: #fffff;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-color: #fff;
    height: 12%;
    background-color: white;
    border-radius: 100px;
    border: 1px;
    width: 100%;
    padding: 14px 40px 14px 14px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    &::placeholder {
        color: #999;
        font-style: bold;
        border-radius: 100px;
    }
`;

const Filter = styled.div`
    background-color: #fffff;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-color: #fff;
    height: 12%;
    width: 20%;
    margin-left: 1%;
`;

const StudentList = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 20px;
    width: 90%;
    max-height: 32vh;
    overflow-y: auto;
`;

const StudentItem = styled.li`
    display: flex;
    justify-content: space-between;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    align-items: center;
    padding: 10px 20px;
    margin: 10px 0;
    background-color: ${({ active }) => (active ? '#e8e8e8' : '#fff')};
    border-radius: 100px;
    border: 1.25px solid black;
    cursor: pointer;
`;

const AddStudentButton = styled.button`
    align-self: flex-end;
    background-color: #2F3192;
    color: white;
    font-family: 'Be Vietnam Pro', sans-serif;
    border: none;
    border-radius: 100px;
    padding: 1em 2em;
    font-size: 1vw;
    cursor: pointer;
    outline: none;
    margin: 0 6%;
    transition: background-color 0.3s;

    &:hover {
        background-color: #23256E;
    }
`;

const SelectStudents = ({ handleStudentItemClick }) => {
    const [students, setStudents] = useState([]);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const [studentsFromClass, setStudentsFromCLass] = useState([]);
    const navigate = useNavigate();
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { selectedTurmaId } = useProgram(); // Desestrutura o selectedTurmaId do contexto ProgramContext
    
    useEffect(() => {
        async function fetchData() {
            try {
                const studentsData = await fetchStudentsFromClass(selectedTurmaId);
                console.log('Response from fetchStudentsFromClass:', studentsData); // Adicione este console.log para depurar
    
                if (Array.isArray(studentsData)) {
                    setStudents(studentsData);
                } else {
                    console.error('Invalid students data:', studentsData);
                }
            } catch (error) {
                console.error('Error fetching students', error);
            }
        }
        fetchData();
    }, [selectedTurmaId]);
    
    
    const handleStudentItemClickInternal = (studentId) => {
        setSelectedStudentId(studentId);
        handleStudentItemClick(studentId);
    }
    const handleAddStudentClick = () => {
        setIsPopupVisible(true);
    }

    return (
        <ContainerSelectStudents>
            <ContainerSearchAndOrder>
                <ContainerSearchBar>
                    <SearchBar placeholder="Pesquisar alunos" />

                    <Filter>
                        <DropDown
                            options={['mais recente', 'mais antigo']}
                            defaultText={`Filtrar`}
                        />
                    </Filter>
                </ContainerSearchBar>
            </ContainerSearchAndOrder>
            <StudentList>
                {Array.isArray(students) && students.map((student, index) => (
                    <StudentItem
                        key={index}
                        active={selectedStudentId === student.id_aluno}
                        onClick={() => handleStudentItemClickInternal(student.id_aluno)}
                    >
                        {student.nome} {/* Exibe o nome do aluno */}
                    </StudentItem>
                ))}
            </StudentList>
            <AddStudentButton onClick={handleAddStudentClick}>
                Adicionar aluno
            </AddStudentButton>
            {isPopupVisible && (
                <AddStudentPopup 
                    isVisible={isPopupVisible}
                    onClose={() => setIsPopupVisible(false)} 
                    studentsData={students} // Passando os dados dos alunos para o pop-up
                    popupText="Adicionar aluno" // Passando o texto para o pop-up
                />
            )}
        </ContainerSelectStudents>
    );
};

export default SelectStudents;
