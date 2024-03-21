const express = require('express');
const OngController = require('../controllers/ongControllers');
const router = express.Router();

router.get('/', OngController.getAllOngs);

module.exports = router;
