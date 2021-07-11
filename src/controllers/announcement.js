const Announcement = require('../models/announcement');
const handleFactory = require('./handleFactory');
const catchAsync = require('./../utils/catchAsync');
const mongoose = require('mongoose')

exports.createNewAnnouncement = handleFactory.createNewDocument(Announcement);
exports.getAnnouncementByID = handleFactory.getOneByID(Announcement);
exports.deleteAnnouncementByID = handleFactory.deleteOneByID(Announcement);
exports.getListOfAnnouncements = catchAsync(async (req, res, next) => {
  const timeTables = req.user.timeTables;
  let announcements = [];
  for (let i = 0; i < timeTables.length; i++) {
    const timeTable = timeTables[i];
    console.log('timetable', timeTable);
    const announcement = await Announcement.find().populate('timeTable');
    announcements.push(announcement);
    console.log('announce', announcement);
  }

  res.status(200).json({
    status: 'Found',
    success: true,
    message: `TimeTables for User with ID ${req.user.id}`,
    data: {
      announcements
    }
  })
})