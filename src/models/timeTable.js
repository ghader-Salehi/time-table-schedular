const mongoose = require('mongoose');

const timeTableSchema = mongoose.Schema({
  master: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: [true, 'Provide course for time table'],
    validate: {
      validator: function (el) {
        return el.rule === 'master';
      },
      message: 'User provided for this time table should be master',
    },
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'course',
    required: [true, 'Provide course for time table'],
  },
  timeTableBells: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'timeTableBell',
      required: [true, 'Provide timeTableBell for this time table'],
    },
  ],
});

const timeTableModel = mongoose.model('timeTable', timeTableSchema);
module.exports = timeTableModel;
