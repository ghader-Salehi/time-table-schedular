const User = require('../models/user');
const AppError = require('../utils/AppError');
const catchAsync = require('./../utils/catchAsync');
const handleFactory = require('./handleFactory');

exports.createNewUser = handleFactory.creatNewDocument(User);
exports.getAllUsers = handleFactory.getListOfDocuments(User);
exports.deleteUserByID = handleFactory.deleteOneByID(User);
exports.updateUserProfileWithParamID = handleFactory.updateOneByID(User, {
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

exports.getUserByID = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) return next(new AppError('No user with this ID exists', 404));
  res.status(200).json({
    status: 'success',
    success: true,
    message: `user with ID ${id} found`,
    data: {
      user,
    },
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
