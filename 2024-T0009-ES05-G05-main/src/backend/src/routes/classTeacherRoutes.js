const express = require('express');
const ClassTeacherController = require('../controllers/classTeacherControllers');
const router = express.Router();

router.get('/classId/:fk_id_turma', ClassTeacherController.getAllTeachersByClass);

module.exports = router;
