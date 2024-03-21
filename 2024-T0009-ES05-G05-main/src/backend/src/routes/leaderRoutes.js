const express = require('express');
const LeaderController = require('../controllers/leaderControllers');
const router = express.Router();

router.get('/', LeaderController.getAllLeaders);

module.exports = router;
