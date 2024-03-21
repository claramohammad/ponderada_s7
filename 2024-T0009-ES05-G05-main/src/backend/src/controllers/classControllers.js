//classControllers.js
const ClassService = require('../services/classServices');

class ClassController {
  static async getAllClasses(req, res) {
    try {
      const Classes = await ClassService.getAllClasses();
      console.log(Classes)
      res.json(Classes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  static async getClassesFromWorkshop(req, res) {
    try {
      const { fk_id_oficina } = req.params;
      const Classes = await ClassService.getClassesFromWorkshop(fk_id_oficina);
      res.json(Classes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ClassController;
