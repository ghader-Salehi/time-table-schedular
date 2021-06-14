const mongoose = require('mongoose');

const daySchema = mongoose.Schema({
  label: {
    type: String,
    required: [true, 'Provide label for day: String'],
  },
  dayOfWeek: {
    type: Number,
    required: [true, 'Provide dayOfWeek for day: Number'],
  },
});

const dayModel = mongoose.model('day', daySchema);
module.exports = dayModel;
