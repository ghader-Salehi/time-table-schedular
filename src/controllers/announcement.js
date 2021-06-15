const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const Annoucement = require('../models/announcement');

exports.getListOfAnnouncements = catchAsync(async (req, res, next) => {
  const masterID = req.params.masterId;
  const timeTableID = req.params.timeTableId;
  let announcements = await Annoucement.find({
    timeTable: timeTableID,
  }).populate('timeTable');
  announcements.filter((el) => {
    el.timeTable.master === masterID;
  });
  // TODO: pagination
  res.status(200).json({
    status: 'success',
    success: true,
    message: 'Announcements list',
    data: {
      announcements,
    },
  });
});

exports.createNewAnnouncement = catchAsync(async (req, res, next) => {
  const announcement = await Announcement.create({
    timeTable: req.body.timeTableId,
    message: req.body.message,
  });

  res.status(201).json({
    status: 'Created',
    success: true,
    message: 'New announcement has been created',
    data: {
      announcement,
    },
  });
});

exports.getAnnouncementByID = catchAsync(async (req, res, next) => {
  const announcement = await Annoucement.findById(req.params.id);
  if (!announcement)
    return next(
      new AppError(`Announcement with ID ${req.params.id} does not exist.`, 404)
    );
  res.status(200).json({
    status: 'OK',
    success: true,
    message: 'Announcement found',
    data: {
      annoucement,
    },
  });
});

exports.deleteAnnouncementByID = catchAsync(async (req, res, next) => {
  const announcement = await Announcement.findOneAndDelete(req.params.id);
  if (!annoucement) return next(new AppError('Announcement does not exist'));
  res.status(200).json({
    status: 'OK',
    success: true,
    message: 'Announcement deleted',
    data: {
      announcement,
    },
  });
});
