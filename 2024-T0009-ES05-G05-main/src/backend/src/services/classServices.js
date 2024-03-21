//classServices.js
const dbService = require('./databaseServices');
const Class = require('../models/Class');

class ClassService {
  
  static async getAllClasses() {
    const results = await dbService.query('SELECT * FROM turmas');
    return results.map(row => new Class(
      row.id_turma,
      row.nome,
      row.fk_id_oficina
    ));
  }
  
  static async getClassesFromWorkshop(fk_id_oficina) {
    const results = await dbService.query(`SELECT * FROM turmas WHERE fk_id_oficina = ${fk_id_oficina}`);
    return results.map(row => new Class(
      row.id_turma,
      row.nome,
      row.fk_id_oficina,
      row.data_inicio,
      row.data_fim,
      row.dias_semana
    ));
  }
}

module.exports = ClassService;
