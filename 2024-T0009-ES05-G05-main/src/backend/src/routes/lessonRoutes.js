const express = require('express');
const LessonController = require('../controllers/lessonControllers');
const router = express.Router();

router.get('/', LessonController.getAllLessons);
router.get('/id/:id_aula', LessonController.getLessonById);
router.get('/classId/:fk_id_turma', LessonController.getLessonByClass);

module.exports = router;
