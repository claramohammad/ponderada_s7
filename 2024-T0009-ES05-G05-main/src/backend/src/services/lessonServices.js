const dbService = require('./databaseServices');
const Lesson = require('../models/Lesson');

class LessonService {
  static async getAllLessons() {
    const results = await dbService.query('SELECT * FROM aulas');
    return results.map(row => new Lesson(
      row.id_aula,
      row.nome,
      row.data,
      row.dias_semana,
      row.fk_id_turma,
    ));
  }
  static async getLessonByClass(id) {
    const query = 'SELECT * FROM aulas WHERE fk_id_turma = ?';
    const result = await dbService.query(query, [id]);
    if (result.length === 0) {
      throw new Error('Aula não encontrada.');
    }
    return result.map(value => new Lesson(
      value.id_aula,
      value.nome,
      value.data,
      value.dias_semana,
      value.fk_id_turma,
    ));
  }
  static async getLessonById(id) {
    const query = 'SELECT * FROM aulas WHERE id_aula = ?';
    const result = await dbService.query(query, [id]);
    if (result.length === 0) {
      throw new Error('Aula não encontrada.');
    }
    const value = result[0];
    return new Lesson(
      value.id_aula,
      value.nome,
      value.data,
      value.dias_semana,
      value.fk_id_turma,
    );
  }
}

module.exports = LessonService;
