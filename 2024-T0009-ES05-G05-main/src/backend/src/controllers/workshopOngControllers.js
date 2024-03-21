const WorkshopOngService = require('../services/workshopOngServices');

class WorkshopOngController {
  static async getAllWorkshopsOng(req, res) {
    try {
      const WorkshopsOng = await WorkshopOngService.getAllWorkshopsOng();
      res.json(WorkshopsOng);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = WorkshopOngController;
