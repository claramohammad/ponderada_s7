const express = require('express');
const StudentController = require('../controllers/studentControllers');
const router = express.Router();

router.get('/', StudentController.getAllStudents);
router.post('/', StudentController.addStudent);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);
router.get('/studentIds/:id_alunos', StudentController.getStudentsByIds);


module.exports = router;
