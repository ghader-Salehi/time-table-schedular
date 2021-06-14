const mongoose = require('mongoose');

const timeTableBellSchema = mongoose.Schema({
  day: {
    type: mongoose.Schema.ObjectId,
    ref: 'day',
    required: [true, 'Provide day for timeTableBell'],
  },
  bell: {
    type: mongoose.Schema.ObjectId,
    ref: 'bell',
    required: [true, 'Provide bell for timeTableBell'],
  },
});

const timeTableBellModel = mongoose.model('timeTableBell', timeTableBellSchema);
module.exports = timeTableBellModel;
