const express = require('express');
const AttendanceListController = require('../controllers/attendanceListControllers');
const router = express.Router();

router.get('/', AttendanceListController.getAllAttendances);
router.post('/attendanceListIds/:ids', AttendanceListController.postAttendanceListByIds);

module.exports = router;
