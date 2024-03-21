// ProgramContext.js
import React, { createContext, useState, useContext } from 'react';

const ProgramContext = createContext(1);

export const ProgramProvider = ({ children }) => {
    const [workshopId, setWorkshopId] = useState(null);
    const [classId, setClassId] = useState(null);
    const [studentId, setStudentId] = useState(null);
    const [teacherId, setTeacherId] = useState(null);
    const [lessonId, setSelectedLessonId] = useState(null);
    const [selectedTurmaId, setSelectedTurmaId] = useState(null);
    const [studentsFromClassId, setStudentsFromClassId] = useState(null);
    const [activeItem, setActiveItem] = useState('aulas');
    const [closeList, setCloseList] = useState(true);


    const value = {
        workshopId,
        setWorkshopId,
        classId,
        setClassId,
        studentId,
        setStudentId,
        teacherId,
        setTeacherId,
        lessonId,
        setSelectedLessonId,
        selectedTurmaId, // Adicionar o estado e a função ao contexto
        setSelectedTurmaId,
        studentsFromClassId,
        setStudentsFromClassId,
        activeItem,
        setActiveItem,
        closeList,
        setCloseList

    };

    return <ProgramContext.Provider value={value}>{children}</ProgramContext.Provider>;
};

export const useProgram = () => useContext(ProgramContext);
