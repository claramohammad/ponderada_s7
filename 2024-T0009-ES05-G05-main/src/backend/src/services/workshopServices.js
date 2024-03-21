const dbService = require('./databaseServices');
const Workshop = require('../models/Workshop');

class WorkshopService {
  static async getAllWorkshops() {
    const results = await dbService.query('SELECT * FROM oficinas');
    return results.map(row => new Workshop(
      row.id_oficina,
      row.fk_id_ong,
      row.nome_oficina,
      row.categoria
    ));
  }

  static async addWorkshop(nome_oficina, categoria) {
    try {
      const result = await dbService.query(`INSERT INTO oficinas (nome_oficina, categoria) VALUES ('${nome_oficina}', '${categoria}')`);
      return result.insertId; // Retorna o ID da oficina inserida
    } catch (error) {
      throw error;
    }
  }

}


module.exports = WorkshopService;
