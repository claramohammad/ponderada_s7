import { title } from 'process';
import styled from 'styled-components';

// Estilizando o componente de cartão
const Card = styled.div`
    background-color: white; /* Cor de fundo do cartão */
    border-radius: 16px; /* Bordas arredondadas */
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2); /* Sombra */
    padding: 15px; /* Preenchimento interno do cartão */
    background-size: cover;
    background-position: center;
    width: 10vw; 
    max-height: 22vh; /* Altura máxima do cartão como 22% da altura da viewport */
    height: auto; /* Altura ajustável */
    display: flex;
    flex-direction: row; /* Direção do layout como linha */
    align-items: center;
    justify-content: space-between; /* Alinhamento do conteúdo */
    margin: 2%;
    cursor: pointer;
`;

// Estilizando o wrapper de conteúdo
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  space-between;
    width: 100%;
    flex-grow: 1; /* O conteúdo pode crescer */
    margin-bottom: 8px; /* Margem inferior extra */
    padding: 16px; /* Preenchimento interno */
    margin-top: 1%; /* Margem superior */
`;

// Estilizando o texto
const Texto = styled.p`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px; /* Tamanho da fonte do texto */
    margin: 2%;
    color: #3C4043; /* Cor do texto */
`;

// Estilizando o texto
const Title = styled.h1`
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 20px; /* Tamanho da fonte do texto */
    margin: 2%;
    color: #3C4043; /* Cor do texto */
`;

// Estilizando o texto
const Subtitle = styled.h2`
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 16px; /* Tamanho da fonte do texto */
    margin: 0;
    color: #3C4043; /* Cor do texto */
`;

// Estilizando a imagem
const Imagem = styled.img`
    width: 100%; /* Largura da imagem */
    max-height: 14vh; /* Altura máxima da imagem */
    object-fit: contain; /* Ajuste da imagem */
`;

// Componente de cartão
const CardClass = ({ imagem, title, subtitle, texto, onClick }) => {
    return (
        <Card>
            <ContentWrapper onClick={onClick}>
                <Imagem src={imagem} alt={texto} /> {/* Imagem */}
                <Title>{title}</Title> {/* Número */}
                <Subtitle>{subtitle}</Subtitle>
                <Texto>{texto}</Texto> {/* Texto */}
            </ContentWrapper>
        </Card>
    );
};

export default CardClass; // Exportando o componente
