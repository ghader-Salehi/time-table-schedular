const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Please provide firstname'],
  },
  lastname: {
    type: String,
    required: [true, 'Please provide lastname'],
  },
  code: {
    type: String,
    required: [true, 'Please provide code for user'],
    unique: true,
  },
  rule: {
    type: String,
    enum: ['master', 'student'],
  },
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
