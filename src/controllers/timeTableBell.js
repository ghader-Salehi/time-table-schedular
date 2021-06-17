const TimeTableBell = require('../models/timeTableBell');
const handleFactory = require('./handleFactory');

exports.deleteTimeTableBellByID = handleFactory.deleteOneByID(TimeTableBell);
exports.createNewTimeTableBell = handleFactory.createNewDocument(TimeTableBell);
exports.getListOfTimeTableBells = handleFactory.getListOfDocuments(
  TimeTableBell,
  'day bell'
);
exports.getTimeTableBellByID = handleFactory.getOneByID(
  TimeTableBell,
  'day bell'
);
