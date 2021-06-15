const hanldeFactory = require('./handleFactory');
const TimeTable = require('../models/timeTable');
const timeTableModel = require('../models/timeTable');

exports.getListOfTimeTalbes = hanldeFactory.getListOfDocuments(TimeTable);
exports.getTimeTableByID = hanldeFactory.getOneByID(TimeTable);
