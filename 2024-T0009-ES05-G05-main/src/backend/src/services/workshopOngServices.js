const dbService = require('./databaseServices');
const WorkshopOng = require('../models/WorkshopOng');

class WorkshopOngService {
  static async getAllWorkshopsOng() {
    const results = await dbService.query('SELECT * FROM oficina_ong');
    return results.map(row => new WorkshopOng(
      row.fk_id_ong,
      row.fk_id_oficina
    ));
  }
}

module.exports = WorkshopOngService;
