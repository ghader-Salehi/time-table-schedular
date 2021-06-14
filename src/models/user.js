const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Please provide firstname'],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, 'Please provide lastname'],
    trim: true,
  },
  code: {
    type: String,
    required: [true, 'Please provide code for user'],
    unique: true,
    trim: true,
  },
  rule: {
    type: String,
    enum: ['master', 'student'],
    required: [true, 'Please provide users rule'],
  },
  timeTables: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'timeTable',
    },
  ],
  timeTableBells: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'timeTableBell',
      validate: {
        validator: function () {
          return this.rule === 'master';
        },
        message: "Validation Error: Student can't have timeTableBells",
      },
    },
  ],
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
