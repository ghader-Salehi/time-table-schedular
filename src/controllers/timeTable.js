const hanldeFactory = require('./handleFactory');
const TimeTable = require('../models/timeTable');
const catchAsync = require('../utils/catchAsync');
const Course = require('../models/course');
const TimeTableBell = require('../models/timeTableBell');
const User = require('../models/user');

const timeTablePopulation = [
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

const mastersPopulation = [
  {
    path: 'courses',
    model: 'course',
  },
  {
    path: 'timeTableBells',
    model: 'timeTableBell',
    populate: [
      { path: 'day', model: 'day' },
      { path: 'bell', model: 'bell' },
    ],
  },
];

exports.getListOfTimeTalbes = hanldeFactory.getListOfDocuments(
  TimeTable,
  timeTablePopulation
);
exports.getTimeTableByID = hanldeFactory.getOneByID(
  TimeTable,
  timeTablePopulation
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

exports.startProcess = catchAsync(async (req, res, next) => {
  const courses = await Course.find();
  const timeTableBells = await TimeTableBell.find().populate('day bell');
  const masters = await User.find({ rule: 'master' })
    .populate(mastersPopulation)
    .select('-timeTables');
  const createTimeTables = require('../algorithms/createTimeTables');
  console.log('starting process\n');
  let timeTables = createTimeTables(courses, timeTableBells, masters);
  timeTables = timeTables.map((timeTable) => {
    timeTable.master.timeTableBells = undefined;
    return timeTable;
  });

  res.status(200).json({
    status: 'success',
    success: true,
    message: 'some data returned',
    data: {
      timeTables,
      courses,
      timeTableBells,
      masters,
    },
  });
});

const userTimeTablePopulation = {
  path: 'timeTables',
  model: 'timeTable',
  populate: [
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
  ],
};

exports.getTodayClasses = catchAsync(async (req, res, next) => {
  console.log('this user timeTables', req.user.timeTables);
  let timeTables =
    req.user.rule === 'admin'
      ? await TimeTable.find().populate(timeTablePopulation)
      : (await User.findById(req.user.id).populate(userTimeTablePopulation))
          .timeTables;
  let dayIndex = new Date().getDay();
  dayIndex = dayIndex == 6 ? 0 : dayIndex + 1;
  timeTables = timeTables.filter((timeTable) => {
    let result = false;
    timeTable.timeTableBells.forEach((timeTableBell) => {
      if (timeTableBell.day.dayOfWeek == dayIndex) result = true;
    });
    return result;
  });

  res.status(200).json({
    status: 'success',
    success: true,
    message: 'Todays Classses found',
    data: {
      timeTables,
    },
  });
});
