
const LessonService = require('../services/lessonServices');

class LessonController {
  static async getAllLessons(req, res) {
    try {
      const Lessons = await LessonService.getAllLessons();
      res.json(Lessons);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  static async getLessonByClass(req, res) {
    try {
      const { fk_id_turma } = req.params;
      const Lessons = await LessonService.getLessonByClass(fk_id_turma);
      res.json(Lessons);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async getLessonById(req, res) {
    try {
      const { id_aula } = req.params;
      const Lesson = await LessonService.getLessonById(id_aula);
      res.json(Lesson);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = LessonController;
