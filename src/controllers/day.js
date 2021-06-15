const handleFactory = require('./handleFactory');
const Day = require('../models/day');

exports.getListOfDays = handleFactory.getListOfDocuments(Day);
exports.createNewDay = handleFactory.createNewDocument(Day);
exports.deleteDayByID = handleFactory.deleteOneByID(Day);
exports.getDayByID = handleFactory.getOneByID(Day);
exports.updateDayByID = handleFactory.updateOneByID(Day, {
  new: true,
  runValidators: true,
});
