const User = require('../models/user');
const AppError = require('../utils/AppError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handleFactory');

exports.createNewUser = factory.createNewDocument(User);
exports.getAllUsers = factory.getListOfDocuments(User);
exports.getUserByID = factory.getOneByID(User);
exports.deleteUserByID = factory.deleteOneByID(User);
exports.updateUserProfileWithParamID = factory.updateOneByID(User, {
  new: true,
  runValidators: true,
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

exports.updateUserProfile = catchAsync(async (req, res, next) => {
  // logged in user updates his profile
  if (req.body.password)
    return next(new AppError("Can't update password using this endpoint", 400));
  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) return next(new AppError('Something went wrong', 404));
  res.status(200).json({
    status: 'success',
    success: true,
    message: `user with ID ${req.user.id} updated`,
    data: {
      user,
    },
  });
});

exports.updateUserPassword = catchAsync(async (req, res, next) => {
  // logged in user updates his password
  if (!req.body.newPassword || !req.body.currentPassword)
    return next(new AppError('Provide new and old passwords', 400));
  if (
    !(await req.user.correctPassword(
      req.body.currentPassword,
      req.user.password
    ))
  )
    return next(new AppError('Wrong old password'));
  const user = req.user;
  user.password = req.body.newPassword;
  await user.save();
  res.status(201).json({
    status: 'success',
    success: true,
    message: 'user password updated',
    data: {},
  });
});

exports.getUserProfile = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    success: true,
    message: 'user profile',
    data: {
      user: req.user,
    },
  });
};
