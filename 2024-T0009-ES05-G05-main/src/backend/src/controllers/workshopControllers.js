// WorkshopController.js
const WorkshopService = require('../services/workshopServices');

class WorkshopController {
  static async getAllWorkshops(req, res) {
    try {
      const workshops = await WorkshopService.getAllWorkshops();
      res.json(workshops);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  static async addWorkshop(req, res) {
    const { nome_oficina, categoria, fk_id_oficina_da_ong } = req.body;
    try {
      const workshopId = await WorkshopService.addWorkshop(nome_oficina, categoria, fk_id_oficina_da_ong);
      res.status(201).json({ id: workshopId, message: 'Oficina adicionada com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = WorkshopController;
