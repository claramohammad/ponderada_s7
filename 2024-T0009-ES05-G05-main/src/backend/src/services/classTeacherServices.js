const dbService = require('./databaseServices');
const ClassTeacher = require('../models/ClassTeacher');

class ClassTeacherService {

  static async getAllTeachersByClass(fk_id_turma) {
    const results = await dbService.query(`SELECT * FROM professor_por_turma WHERE fk_id_turma = ${fk_id_turma}`);
    return results.map(row => new ClassTeacher(
      row.fk_id_turma,
      row.fk_id_professor
    ));
    }
}

module.exports = ClassTeacherService;
