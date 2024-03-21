const ClassTeacherService = require('../services/classTeacherServices');

class ClassTeacherController {
  static async getAllTeachersByClass(req, res) {
    try {
      const { fk_id_turma } = req.params;
      const professoresPorTurma = await ClassTeacherService.getAllTeachersByClass(fk_id_turma);
      res.json(professoresPorTurma);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = ClassTeacherController;
