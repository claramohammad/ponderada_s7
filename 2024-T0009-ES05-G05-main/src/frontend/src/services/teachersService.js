// studentsService.js
const apiUrl = `${process.env.REACT_APP_API_URL}`;


// Função assíncrona para buscar dados de um aluno por ID
async function fetchTeacher(teacherId) {
    try {
        // Faz uma requisição GET para a API com o ID do aluno no endpoint para obter os dados do aluno
        const response = await fetch(`${apiUrl}/teachers/professorIds/${teacherId}`);
        // Extrai os dados da resposta como JSON
        const data = await response.json();
        // Retorna os dados obtidos do aluno
        return data;
    } catch (error) {
        // Em caso de erro, exibe uma mensagem de erro no console
        console.error('An error occurred while fetching data from the API:', error);
        // Lança o erro para ser tratado pela função chamadora
        throw error;
    }
}

async function fetchTeachersFromClass(classId) { //consulta na tabela matricula para usar os ids dos estudantes na consulta da tabela estudantes
    try {
        const response = await fetch(`${apiUrl}/classTeacher/classId/${classId}`);
        const data = await response.json();
        // Extrai apenas os IDs dos alunos da resposta
        const teacherIds = data.map(item => item.fk_id_professor);
        // Chama a função fetchStudents com os IDs dos alunos
        const studentsData = await fetchTeacher(teacherIds);
        return studentsData;
    } catch (error) {
        console.error('An error occurred while fetching data from the API:', error);
        throw error;
    }
}

// Exporta a função fetchStudents para ser utilizada em outros arquivos
export { fetchTeachersFromClass };
