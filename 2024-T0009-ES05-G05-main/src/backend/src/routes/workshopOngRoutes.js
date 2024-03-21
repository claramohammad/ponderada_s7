const express = require('express');
const WorkshopOngController = require('../controllers/workshopOngControllers');
const router = express.Router();

router.get('/', WorkshopOngController.getAllWorkshopsOng);

module.exports = router;
