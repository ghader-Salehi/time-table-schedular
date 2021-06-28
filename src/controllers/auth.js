const jwt = require('jsonwebtoken');
const catchAsync = require('./../utils/catchAsync');
const User = require('./../models/user');
const AppError = require('./../utils/AppError');
const util = require('util');

const singToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createAndSendToken = catchAsync(async (user, statusCode, res) => {
  const token = singToken(user.id);
  user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    success: true,
    message: 'User logged in successfully',
    data: {
      token,
      user,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { code, password } = req.body;
  if (!code || !password)
    return next(new AppError('Provide code and password'));
  const user = await User.findOne({ code }).select('+password');
  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError('Wrong code or password'));
  createAndSendToken(user, 201, res);
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.rule))
      return next(
        new AppError('You are not allowed to perform this action', 403)
      );
    next();
  };
};

exports.protect = catchAsync(async (req, res, next) => {
  if (!req.headers.authorization)
    return next(new AppError('Provide Authorization header', 403));
  const token = req.headers.authorization;
  if (!token) return next(new AppError('Provide JWT token', 403));
  const decoded = await util.promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );
  const user = await User.findById(decoded.id).select('+password');
  if (!user) return next(new AppError('You are not Authonticated', 403));
  req.user = user;
  next();
});
