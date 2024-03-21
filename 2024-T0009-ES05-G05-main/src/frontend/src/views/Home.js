import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import CardHome from "../components/CardHome";
import { useNavigate } from 'react-router-dom';
import { fetchOficinas } from '../services/homeService';
import { useProgram } from '../contexts/ProgramContext';
import AddOficina from "../components/AddOficina";

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F5F5F5;
  min-height: 100vh;
  width: 100%;
`;

const SidebarWidth = '20%';

const PageHeader = styled.div`
  width: 100%;
  padding: 50px;
  padding-left: calc(${SidebarWidth} + 200px);
  font-family: 'Be Vietnam Pro Bold', sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: ${props => (props.showModal ? 'transparent' : '#333')};
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  margin-left: ${SidebarWidth};
  width: calc(100% - ${SidebarWidth});
  padding: 100px;
  gap: 30px; 
  box-sizing: border-box;
  padding-top: 0px;
  position: relative;
  align-items: flex-start;
`;

const ButtonContainer = styled.div`
  flex: 20%;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 15%;
  height: auto; 
  margin: 5px; 
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;


const AddButton = styled.button`
  top: 70px;
  left: 60px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #E0E0E0;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 24px;
`;

// Estilo para o popup

const Home = () => {
  const navigate = useNavigate();
  const { setWorkshopId } = useProgram(); // Usando o hook do contexto
  const [workshopsData, setWorkshopsData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [shouldUpdateWorkshops, setShouldUpdateWorkshops] = useState(false);

  useEffect(() => {
    async function loadWorkshops() {
      try {
        const workshops = await fetchOficinas();
        setWorkshopsData(workshops);
      } catch (error) {
        console.error('Erro ao carregar oficinas:', error);
      }
    }
    loadWorkshops();
  }, [shouldUpdateWorkshops]);

  const handleCardClick = oficinaId => {
    setWorkshopId(oficinaId); // Define o ID da oficina no contexto
    navigate('/workshop'); // Navega para a rota que exibe detalhes da oficina
  };

  const handleAddButtonClick = () => {
    setShowModal(true);
    setShouldUpdateWorkshops(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    if (shouldUpdateWorkshops) {
      setShouldUpdateWorkshops(false);
      async function loadWorkshops() {
        try {
          const workshops = await fetch('/workshops');
          const data = await workshops.json();
          setWorkshopsData(data);
        } catch (error) {
          console.error('Erro ao carregar oficinas:', error);
        }
      }
      loadWorkshops();
    }
  };

  return (
    <StyledBody>
      <Sidebar />
      <PageHeader>Oficinas</PageHeader>
      <CardsContainer>
        <ButtonContainer>
          <AddButton onClick={handleAddButtonClick}>+</AddButton>
        </ButtonContainer>
        {Array.isArray(workshopsData) && workshopsData.length > 0 ? (
          workshopsData.map(workshop => {
            return <CardHome
            key={workshop.id_oficina}
            title={workshop.nome_oficina}
            icon={workshop.categoria}
            onClick={() => handleCardClick(workshop.id_oficina)}
          />

          }

          )
        ) : (
          <p>Nenhuma oficina encontrada.</p>
        )}
      </CardsContainer>
      {showModal && <AddOficina onClose={handleModalClose} />}
      <Footer />
    </StyledBody>
  );
};

export default Home;
