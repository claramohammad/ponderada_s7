import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddStudentPopup from '../components/AddStudentPopup'; // Import the AddTeacherPopup component if needed
import { fetchTeachersFromClass } from '../services/teachersService'; // Import the fetchTeachers function from your services
import { useNavigate } from 'react-router-dom';
import DropDown from "../components/DropDown";
import { useProgram } from '../contexts/ProgramContext';

const ContainerSelectTeachers = styled.div`
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

const TeacherList = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 20px;
    width: 90%;
    max-height: 32vh;
    overflow-y: auto;
`;

const TeacherItem = styled.li`
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

const AddTeacherButton = styled.button`
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
const SelectTeachers = ({ handleTeacherItemClick }) => {
    const [teachers, setTeachers] = useState([]);
    const [selectedTeacherId, setSelectedTeacherId] = useState(null);
    const navigate = useNavigate();
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { selectedTurmaId } = useProgram();

    useEffect(() => {
        async function fetchData() {
            try {
                const teachersData = await fetchTeachersFromClass(selectedTurmaId);
                console.log('Response from fetchteachersFromClass:', teachersData); // Adicione este console.log para depurar
    
                if (Array.isArray(teachersData)) {
                    setTeachers(teachersData);
                } else {
                    console.error('Invalid teachers data:', teachersData);
                }
            } catch (error) {
                console.error('Error fetching teachers', error);
            }
        }
        fetchData();
    }, [selectedTurmaId]);

    const handleTeacherItemClickInternal = (teacherId) => {
        setSelectedTeacherId(teacherId);
        handleTeacherItemClick(teacherId);

        // Navigate logic
    };

    const handleAddTeacherClick = () => {
        setIsPopupVisible(true);
    };

    return (
        <ContainerSelectTeachers>
            <ContainerSearchAndOrder>
                <ContainerSearchBar>
                    <SearchBar placeholder="Pesquisar professores" />

                    <Filter>
                        <DropDown
                            options={['mais recente', 'mais antigo']}
                            defaultText={`Filtrar`}
                        />
                    </Filter>
                </ContainerSearchBar>
            </ContainerSearchAndOrder>
            <TeacherList>
                {teachers.map((teacher, index) => (
                    <TeacherItem
                        key={index}
                        onClick={() => handleTeacherItemClickInternal(teacher.id)}
                    >
                        {teacher.nome}
                    </TeacherItem>
                ))}
            </TeacherList>
            <AddTeacherButton onClick={handleAddTeacherClick}>
                Adicionar professor
            </AddTeacherButton>
            {isPopupVisible && (
                <AddStudentPopup 
                    isVisible={isPopupVisible}
                    onClose={() => setIsPopupVisible(false)} 
                />
            )}
        </ContainerSelectTeachers>
    );
};

export default SelectTeachers;