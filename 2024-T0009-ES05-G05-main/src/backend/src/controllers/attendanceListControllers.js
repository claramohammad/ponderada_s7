const AttendanceListService = require('../services/attendanceListServices');

class AttendanceListController {
  static async getAllAttendances(req, res) {
    try {
      const Attendances = await AttendanceListService.getAllAttendances();
      res.json(Attendances);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async postAttendanceListByIds(req, res) {
    try {
        const { studentIds, lessonId } = req.body;
        const result = await AttendanceListService.postAttendanceListByIds(studentIds, lessonId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

}

module.exports = AttendanceListController;
