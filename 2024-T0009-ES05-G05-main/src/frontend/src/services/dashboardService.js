// dashboardService.js
const apiUrl = `${process.env.REACT_APP_API_URL}/dashboard`

// Função assíncrona para buscar dados do painel de controle
async function fetchDados() {
    try {
        // Faz uma requisição GET para a API
        const response = await fetch(apiUrl);
        // Extrai os dados da resposta como JSON
        const data = await response.json();
        // Retorna os dados obtidos
        return data;
    } catch (error) {
        // Em caso de erro, exibe uma mensagem de erro no console
        console.error('An error occurred while fetching data from the API:', error);
        // Lança o erro para ser tratado pela função chamadora
        throw error;
    }
}

// Exporta a função fetchDados para ser utilizada em outros módulos
export { fetchDados };
