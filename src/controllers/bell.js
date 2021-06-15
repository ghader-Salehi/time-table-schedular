const Bell = require('../models/bell');
const handleFactory = require('./handleFactory');

exports.getListOfBells = handleFactory.getListOfDocuments(Bell);
exports.createNewBell = handleFactory.createNewDocument(Bell);
exports.getBellByID = handleFactory.getOneByID(Bell);
exports.deleteBellByID = handleFactory.deleteOneByID(Bell);
exports.updateBellByID = handleFactory.updateOneByID(Bell, {
  new: true,
  runValidators: true,
});
