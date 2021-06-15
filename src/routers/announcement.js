const express = require('express');
const announcementController = require('../controllers/announcement');

const router = express.Router();

router
  .route('/')
  .get(announcementController.getListOfAnnouncements)
  .post(announcementController.createNewAnnouncement);
router
  .route('/:id')
  .get(announcementController.getAnnouncementByID)
  .delete(announcementController.deleteAnnouncementByID);

module.exports = router;
