const TimeTableBell = require('../models/timeTableBell');
const handleFactory = require('./handleFactory');
const catchAsync = require('./../utils/catchAsync');

exports.deleteTimeTableBellByID = handleFactory.deleteOneByID(TimeTableBell);
exports.createNewTimeTableBell = handleFactory.createNewDocument(TimeTableBell);
exports.getListOfTimeTableBells = handleFactory.getListOfDocuments(
  TimeTableBell,
  'day bell'
);
exports.getTimeTableBellByID = handleFactory.getOneByID(
  TimeTableBell,
  'day bell'
);

exports.chooseTimeTableBell = catchAsync(async (req, res, next) => {
  const timeTableBell = await TimeTableBell.findById(req.params.id);
  if (!timeTableBell) return next(AppError('No timeTableBell with this id', 400));
  if (req.params.selection == 'true') {
    if (req.user.timeTableBells.includes(timeTableBell._id))
      return res.status(400).json({
        status: 'exists',
        success: false,
        message: 'Already choosen'
      })
    req.user.timeTableBells.push(timeTableBell._id);
    await req.user.save();
    return res.status(200).json({
      status: 'selected',
      success: true,
      message: 'TimeTableBell selected',
      data: {
        user: req.user
      }
    })
  }
  else if (req.params.selection == 'false') {
    if (req.user.timeTableBells.includes(timeTableBell._id)) {
      const indexOfBell = req.user.timeTableBells.indexOf(timeTableBell._id);
      console.log('indexOfBell', indexOfBell)
      req.user.timeTableBells.splice(indexOfBell, 1)
      await req.user.save();
      return res.status(200).json({
        status: 'Removed',
        success: true,
        message: 'TimeTableBell removed'
      })
    }
    else {
      return res.status(400).json({
        status: 'no existance',
        success: false,
        message: 'TimeTableBell does not exist'
      })
    }
  }

  res.send('chooseTimeTableBell went wrong')
})