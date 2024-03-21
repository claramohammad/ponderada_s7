const RegisterClass = require('../services/registerClassServices');

class RegisterClassController {
  static async getAllRegisterClasses(req, res) {
    try {
      const RegisterClasses = await RegisterClass.getAllRegisterClasses();
      res.json(RegisterClasses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async getRegisterClassesById(req, res) {
    try {
      const { fk_id_turma } = req.params;
      const RegisterClasses = await RegisterClass.getRegisterClassesById(fk_id_turma);
      res.json(RegisterClasses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = RegisterClassController;
