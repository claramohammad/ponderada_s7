const express = require('express');
const WorkshopController = require('../controllers/workshopControllers');
const router = express.Router();

router.get('/', WorkshopController.getAllWorkshops);
router.post('/', WorkshopController.addWorkshop);

module.exports = router;
