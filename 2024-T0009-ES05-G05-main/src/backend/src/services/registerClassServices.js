const dbService = require('./databaseServices');
const RegisterClass = require('../models/RegisterClass');

class RegisterClassService {
  static async getAllRegisterClasses() {
    const results = await dbService.query('SELECT * FROM matricula');
    return results.map(row => new RegisterClass(
      row.fk_id_aluno,
      row.fk_id_turma
    ));
  }
  static async getRegisterClassesById(fk_id_turma) {
    const results = await dbService.query(`SELECT * FROM matricula WHERE fk_id_turma = ${fk_id_turma}`);
    return results.map(row => new RegisterClass(
      row.fk_id_aluno,
      row.fk_id_turma
    ));
  }
}

module.exports = RegisterClassService;
