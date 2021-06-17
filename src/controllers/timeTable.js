const hanldeFactory = require('./handleFactory');
const TimeTable = require('../models/timeTable');
const catchAsync = require('../utils/catchAsync');

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

exports.getListOfTimeTalbes = hanldeFactory.getListOfDocuments(
  TimeTable,
  timeTablePopulations
);
exports.getTimeTableByID = hanldeFactory.getOneByID(
  TimeTable,
  timeTablePopulations
);

exports.chooseTimeTableByStudent = catchAsync(async (req, res, next) => {
  const user = req.user;
  const preTimeTables = user.timeTables ? user.timeTables : [];
  user.timeTables = [...preTimeTables, req.params.id];
  const updatedUser = await user.save();
  res.status(200).json({
    status: 'success',
    success: true,
    message: 'Choosed time table',
    data: {
      user: updatedUser,
    },
  });
});
