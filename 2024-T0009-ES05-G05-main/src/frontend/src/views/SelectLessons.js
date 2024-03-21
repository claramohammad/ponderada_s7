import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchLessonsByClass } from '../services/selectLessonsService';
import { useProgram } from '../contexts/ProgramContext';

const ContainerSelectLessons = styled.div`
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

const LessonList = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 20px;
    width: 90%;
    max-height: 37vh;
    overflow-y: auto;
`;

const LessonItem = styled.li`
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

const SelectLessons = () => {
    const [lessons, setLessons] = useState([]);
    const { selectedTurmaId, setSelectedLessonId, lessonId, setCloseList } = useProgram();

    console.log('lessons ids', lessonId)
    useEffect(() => {
        async function fetchData() {
            try {
                const lessonsData = await fetchLessonsByClass(selectedTurmaId);
                console.log('Response from fetchLessonsByClass:', lessonsData);

                if (Array.isArray(lessonsData)) {
                    setLessons(lessonsData);
                    console.log('Lessons data:', lessonsData)
                } else {
                    console.error('Invalid lessons data:', lessonsData);
                }
            } catch (error) {
                console.error('Error fetching lessons', error);
            }
        }
        fetchData();
    }, [selectedTurmaId]);

    
    
    return (
        <ContainerSelectLessons>
            <ContainerSearchAndOrder>
                <ContainerSearchBar>
                    <SearchBar placeholder="Pesquisar aulas" />
                    <Filter>
                        {/* Seu código para o componente DropDown */}
                    </Filter>
                </ContainerSearchBar>
            </ContainerSearchAndOrder>
            <LessonList>
                {lessons.map((lessonItem) => (
                    <LessonItem
                        key={lessonItem.id_aula}
                        onClick={() => {
                            setSelectedLessonId(lessonItem.id_aula);
                            setCloseList(false);
                            // setActiveItem('lista_de_presenca');
                        }}
                    >
                        {lessonItem.nome}
                    </LessonItem>
                ))}
            </LessonList>
        </ContainerSelectLessons>
    );
};

export default SelectLessons;
