const dbService = require('./databaseServices');
const AttendanceList = require('../models/AttendanceList');

class AttendanceListService {
  static async getAllAttendances() {
    const results = await dbService.query('SELECT * FROM lista_de_presenca');
    return results.map(row => new AttendanceList(
      row.fk_id_aluno,
      row.fk_id_aula,
      row.presenca,
    ));
  }
  static async postAttendanceListByIds(studentIds, lessonId) {
    // Verifica se studentIds é um array para tratamento adequado
    const ids = Array.isArray(studentIds) ? studentIds : [studentIds];

    const query = 'INSERT INTO lista_de_presenca (fk_id_aluno, fk_id_aula, presenca) VALUES (?, ?, ?)';
    
    // Mapeia os valores para cada inserção na tabela
    const values = ids.map(studentId => [studentId, lessonId, true]); // Presença definida como true neste exemplo

    const results = await Promise.all(
        values.map(value => dbService.query(query, value))
    );

    return results.map(result => result.insertId);
}

}

}

module.exports = AttendanceListService;
