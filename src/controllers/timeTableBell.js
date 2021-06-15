const TimeTableBell = require('../models/timeTableBell');
const handleFactory = require('./handleFactory');

exports.getListOfTimeTableBells =
  handleFactory.getListOfDocuments(TimeTableBell);
exports.getTimeTableBellByID = handleFactory.getOneByID(TimeTableBell);
exports.deleteTimeTableBellByID = handleFactory.deleteOneByID(TimeTableBell);
exports.createNewTimeTableBell = handleFactory.createNewDocument(TimeTableBell);
