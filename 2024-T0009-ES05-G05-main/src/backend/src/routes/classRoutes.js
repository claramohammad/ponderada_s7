const express = require('express');
const router = express.Router();
const ClassController = require('../controllers/classControllers');

router.get('/', ClassController.getAllClasses);
router.get('/classesFromWorkshop/:fk_id_oficina', ClassController.getClassesFromWorkshop);

module.exports = router;
