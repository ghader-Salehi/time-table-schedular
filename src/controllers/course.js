const catchAsync = require('../utils/catchAsync');
const hanldeFactory = require('./handleFactory');
const Course = require('../models/course');
const TimeTable = require('../models/timeTable');

exports.getListOfCourses = hanldeFactory.getListOfDocuments(Course, {
  title: req.query.search,
  unitsCount: req.query.unitscount,
});
exports.createNewCourse = hanldeFactory.createNewCourse(Course);
exports.getCourseByID = hanldeFactory.getOneByID(Course);
exports.updateCourseByID = hanldeFactory.updateOneByID(Course, {
  new: true,
  runValidators: true,
});
exports.deleteCourseByID = hanldeFactory.deleteOneByID(Course);

exports.getCourseTimeTables = catchAsync(async (req, res, next) => {
  const timeTables = await TimeTalbe.find({ course: req.params.id });
  res.status(200).json({
    status: 'OK',
    success: true,
    message: 'Found courses time tables',
    data: {
      timeTables,
    },
  });
});
