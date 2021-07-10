const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AppError = require('../utils/AppError');

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
    enum: ['master', 'student', 'admin'],
    required: [true, 'Please provide users rule'],
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Provide password for user'],
    select: false,
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
      // validate: { // validators could not access to the this.rule (fuck). created middleware for this validation ==> A00
      //   validator: function () {
      //     return this.rule === 'master';
      //   },
      //   message: "Validation Error: Student can't have timeTableBells",
      // },
    },
  ],
  courses: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'course',
      // validate: {
      //   validator: function () {
      //     return this.rule === 'master';
      //   },
      //   message: "Validation Error: Student can't choose courses",
      // },
    },
  ],
});

// middlewares
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const encryptedPassword = await bcrypt.hash(this.password, 12);
  this.password = encryptedPassword;
  next();
});

// student & admin can not have timeTableBells and courses (this is what protects students & admins from selecting timeTableBells and courses)
// A00 ==> validation purpose middleware
userSchema.pre('save', function (next) {
  if (!this.isModified('timeTableBells') && !this.isModified('courses')) return next();
  if (this.rule != 'master') return next(new AppError('Only master can have courses and timeTableBells', 400))
  next();
})

// instance methods
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
