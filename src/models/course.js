const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Provide title for course: String'],
  },
  unitsCount: {
    type: Number,
    required: [true, 'Provide unitsCount for course: Number'],
  },
});

const courseModel = mongoose.model('course', courseSchema);
module.exports = courseModel;
