const User = require('../models/user');
const catchAsync = require('./../utils/catchAsync');

exports.createNewUser = catchAsync(async (req, res, next) => {
  const user = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    code: req.body.code,
    rule: req.body.rule,
    password: req.body.password,
  });
  res.status(201).json({
    status: 'Created',
    message: 'A new user has been created',
    success: true,
    data: {
      user,
    },
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: 'OK',
    success: true,
    message: 'List of users',
    data: {
      users,
    },
  });
});

exports.createAListOfUsers = catchAsync(async (req, res, next) => {
  // this is wrong :///
  const users = await User.insertMany(req.body);
  res.status(201).json({
    status: 'Created',
    message: 'List of Users created',
    success: true,
    data: {
      users,
    },
  });
});
