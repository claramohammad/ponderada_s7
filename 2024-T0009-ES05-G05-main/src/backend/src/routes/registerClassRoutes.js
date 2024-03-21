const express = require('express');
const RegisterClassController = require('../controllers/registerClassControllers');
const router = express.Router();

router.get('/', RegisterClassController.getAllRegisterClasses);
router.get('/classesId/:fk_id_turma', RegisterClassController.getRegisterClassesById);

module.exports = router;
