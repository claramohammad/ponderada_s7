const express = require('express');
const TeacherController = require('../controllers/teacherControllers');
const router = express.Router();

// Rota para obter todos os professores
router.get('/', TeacherController.getAllTeachers);

// Rota para obter um professor específico pelo ID
router.get('/professorIds/:id_professores', TeacherController.getTeachersByIds);

// Rota para adicionar um novo professor
router.post('/', TeacherController.addTeacher);

// Rota para atualizar um professor existente
router.put('/:id', TeacherController.updateTeacher);

// Rota para excluir um professor
router.delete('/:id', TeacherController.deleteTeacher);

// Rota para buscar professores por nome ou ID
router.get('/search', TeacherController.searchTeacher);

module.exports = router;
