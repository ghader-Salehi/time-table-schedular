const mongoose = require('mongoose');

const bellSchema = new mongoose.Schema({
  label: {
    type: String,
    required: [true, 'Provide label for Bell: String'],
  },
  bellOfDay: {
    type: Number,
    required: [true, 'Provide bellOfDay: Number'],
  },
});

const bellModel = mongoose.model('bell', bellSchema);
module.exports = bellModel;
