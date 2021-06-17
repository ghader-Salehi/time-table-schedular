const catchAsync = require('../utils/catchAsync');
const hanldeFactory = require('./handleFactory');
const Course = require('../models/course');
const TimeTable = require('../models/timeTable');
const User = require('../models/user');

const timeTablePopulations = [
  {
    path: 'timeTableBells',
    model: 'timeTableBell',
    populate: [
      {
        path: 'day',
        model: 'day',
      },
      {
        path: 'bell',
        model: 'bell',
      },
    ],
  },
  {
    path: 'master',
    model: 'user',
  },
  {
    path: 'course',
    model: 'course',
  },
];

exports.getListOfCourses = hanldeFactory.getListOfDocuments(Course);
exports.createNewCourse = hanldeFactory.createNewDocument(Course);
exports.getCourseByID = hanldeFactory.getOneByID(Course);
exports.updateCourseByID = hanldeFactory.updateOneByID(Course, {
  new: true,
  runValidators: true,
});
exports.deleteCourseByID = hanldeFactory.deleteOneByID(Course);

exports.getCourseTimeTables = catchAsync(async (req, res, next) => {
  let timeTables = await TimeTable.find().populate(timeTablePopulations);
  timeTables = timeTables.filter((el) => {
    return el.course._id == req.params.id;
  });
  res.status(200).json({
    status: 'OK',
    success: true,
    message: 'Found courses time tables',
    data: {
      timeTables,
    },
  });
});

exports.getCourseMasters = catchAsync(async (req, res, next) => {
  let masters = await User.find({ rule: 'master' });
  masters = masters.filter((el) => {
    return el.courses.includes(req.params.id);
  });
  res.status(200).json({
    status: 'OK',
    success: true,
    message: 'Found courses masters',
    data: {
      masters,
    },
  });
});

exports.chooseCourse = catchAsync(async (req, res, next) => {
  const user = req.user;
  const preCourses = user.courses ? user.courses : [];
  user.courses = [...preCourses, req.params.id];
  const updatedUser = await user.save();
  res.status(200).json({
    status: 'success',
    success: true,
    message: 'Choosed Course',
    data: {
      user: updatedUser,
    },
  });
});
