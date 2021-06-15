const Announcement = require('../models/announcement');
const handleFactory = require('./handleFactory');

exports.getListOfAnnouncements = handleFactory.getListOfDocuments(Announcement);
exports.createNewAnnouncement = handleFactory.createNewDocument(Announcement);
exports.getAnnouncementByID = handleFactory.getOneByID(Announcement);
exports.deleteAnnouncementByID = handleFactory.deleteOneByID(Announcement);
