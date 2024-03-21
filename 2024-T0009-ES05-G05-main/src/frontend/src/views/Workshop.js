import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useProgram } from "../contexts/ProgramContext";
import { fetchClassesByWorkshopId } from "../services/workshopService";
import Dashboard from "./Dashboard";
import arrowLeft from "../img/arrow_left.png";
import CardClass from "../components/CardClass";
import classCard from "../img/class_card.png";

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  position: fixed;
`;

const ContainerPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
`;

const DataSection = styled.div`
  display: flex;
  width: 80%;
  height: 94%;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 80%;
  margin-top: 20px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  flex-direction: column;
`;

const ArrowLeft = styled.img`
  width: 1%;
  height: 3vh;
  margin-right: 4%;
  margin-left: 4%;
  cursor: pointer;
  margin-top: 2%;
`;

const ScrollableDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  margin-right: 1%;
  scrollbar-width: thin;
  scrollbar-color: black white;
`;

const ClassDiv = styled.div`
  margin-top: 10%;
  margin-left: 5%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  width: 80%;
  max-width: 90%;
  height: 60vh;
  margin-bottom: 3%;
`;

const ClassName = styled.h1`
  font-family: "Be Vietnam Pro Extra Bold", sans-serif;
  font-size: 25px;
  margin-left: 6%;
  display: flex;
  flex-direction: row;
  align-self: start;
`;

const Workshop = () => {
  const navigate = useNavigate();
  const { workshopId, setSelectedTurmaId, setActiveItem } = useProgram(); // Adicionar setSelectedTurmaId ao desestruturar
  const [classesData, setClassesData] = useState([]);

  const handleCardClick = (turmaId) => {
    setSelectedTurmaId(turmaId);
    setActiveItem('aulas');// Definir o id_turma selecionado
    navigate("/workshop/lessons");
  };
  
  useEffect(() => {
    async function loadClasses() {
      try {
        const classes = await fetchClassesByWorkshopId(workshopId);
        setClassesData(classes);
      } catch (error) {
        console.error('Erro ao carregar oficinas:', error);
      }
    }
    loadClasses();
  }, [workshopId]); // Adicionar workshopId como dependência do useEffect

  const handleArrowClick = () => {
    navigate("/home");
  };

  return (
    <StyledBody>
      <Footer />
      <Sidebar />
      <ContainerPage>
        <DataSection>
          <DashboardContainer>
            <ScrollableDiv>
              <ClassName>{`Dados da Oficina`}</ClassName>
              <ArrowLeft src={arrowLeft} alt="Arrow Left" onClick={handleArrowClick} />
              <Dashboard />
              <ClassDiv>
                <ClassName>Turmas</ClassName>
                <ButtonContainer>
                  {Array.isArray(classesData) && classesData.length > 0 ? (
                    classesData.map(turma => (
                      <CardClass
                        key={turma.id_turma}
                        title={`${turma.nome}`}
                        imagem={classCard}
                        onClick={() => handleCardClick(turma.id_turma)}
                      />
                    ))
                  ) : (
                    <p>Nenhuma turma encontrada.</p>
                  )}
                </ButtonContainer>
              </ClassDiv>
            </ScrollableDiv>
          </DashboardContainer>
        </DataSection>
      </ContainerPage>
    </StyledBody>
  );
};

export default Workshop;
