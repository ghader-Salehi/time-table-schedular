const mongoose = require('mongoose');

const annoucementSchema = mongoose.Schema({
  timeTable: {
    type: mongoose.Schema.ObjectId,
    ref: 'timeTable',
  },
  message: {
    type: String,
    require: [true, 'Provide message for announcement: String'],
  },
});

const announcementModel = mongoose.model('announcement', annoucementSchema);
module.exports = announcementModel;
