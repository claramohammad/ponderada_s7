import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as LupaIcon } from '../img/lupa.svg';
import { fetchStudent } from '../services/studentsService'; // Importa a função fetchStudents do serviço dashboardService

// Estilizando o título da classe
const TitleClass = styled.h2`
    font-family: 'Be Vietnam Pro Bold', sans-serif;
    font-size: 20px;
`;

// Estilizando o overlay do pop-up
const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adicionando um fundo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Estilizando o conteúdo do pop-up
const PopupContent = styled.div`
    background-color: white;
    padding: 30px; /* Ajustando o preenchimento do pop-up */
    border-radius: 20px; /* Arredondando as bordas do pop-up */
    display: flex;
    flex-direction: column; /* Organizando os elementos em coluna */
    align-items: center; /* Centralizando os elementos horizontalmente */
    width: 80%; /* Aumentando a largura do pop-up */
    max-width: 500px; /* Definindo uma largura máxima */
`;

// Estilizando cada item da lista de alunos
const StudentListItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background-color: #f7f7f7; // fundo cinza claro para itens alternados
    padding: 10px;
    border-radius: 15px; // cantos arredondados
    border: 1px solid #e6e6e6;
    margin: 5px 0; // espaçamento entre itens
`;

// Componente de radio modificado
const StudentRadio = styled.input.attrs({ type: 'radio' })`
    margin-right: 10px;
`;

// Estilizando o formulário
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`;

const StudentName = styled.span`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 14px;
    color: #333;
`;

const SearchIcon = styled.span`
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none; // Impede que o ícone interfira no clique do input
`;

// Estilizando a entrada do formulário
const FormInput = styled.input`
    font-family: 'Be Vietnam Pro', sans-serif;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 20px;
`;

// Estilizando o contêiner dos botões
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px; /* Adicionando margem entre os botões e o conteúdo */
`;

// Estilizando o botão "Salvar"
const SaveButton = styled.button`
    padding: 10px 20px;
    font-size: 12px;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: white;
    background-color: #2F3192;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #23256E;
    }
`;

// Estilizando o botão "Voltar"
const BackButton = styled.button`
    padding: 10px 20px;
    font-size: 12px;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: #999999;
    background-color: white;
    border: 1.25px solid #999999;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #E8E8E8;
    }
`;

const AddStudentPopup = ({ onClose }) => {
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [students, setStudents] = useState([]); // Estado para armazenar os dados dos alunos

    useEffect(() => {
        async function fetchData() {
            try {
                // Chama a função fetchStudents do serviço para buscar os dados dos alunos
                const studentsData = await fetchStudent();
                setStudents(studentsData);
            } catch (error) {
                console.error('An error occurred while fetching students data:', error);
            }
        }

        fetchData(); // Chama a função de busca ao montar o componente
    }, []); // Passa um array vazio como segundo argumento para garantir que a busca seja feita apenas uma vez

    const handleSave = () => {
        onClose(); // Fechando o pop-up
    };

    // Define ou atualiza o estado com os alunos selecionados
    const handleRadioChange = (studentId) => {
        setSelectedStudents((prevSelected) => {
            // Checa se o estudante já está na lista de selecionados
            if (prevSelected.includes(studentId)) {
                // Se estiver, remove
                return prevSelected.filter((id) => id !== studentId);
            } else {
                // Se não estiver, adiciona
                return [...prevSelected, studentId];
            }
        });
    };

    return (
        <PopupOverlay>
            <PopupContent>
                <TitleClass>Adicionar aluno(a)</TitleClass>
                <Form>
                    {/* Campo de pesquisa */}
                    <FormInput type="text" placeholder="Pesquisar" />
                    {/* Lista de alunos */}
                    {students.map((student) => (
                        <StudentListItem key={student.id_aluno}>
                            <StudentRadio
                                checked={selectedStudents.includes(student.id_aluno)}
                                onChange={() => handleRadioChange(student.id_aluno)}
                            />
                            <StudentName>{student.nome}</StudentName>
                        </StudentListItem>
                    ))}
                </Form>
                <ButtonContainer>
                    <BackButton onClick={onClose}>Voltar</BackButton>
                    <SaveButton onClick={handleSave}>Salvar</SaveButton>
                </ButtonContainer>
            </PopupContent>
        </PopupOverlay>
    );
};

export default AddStudentPopup;
