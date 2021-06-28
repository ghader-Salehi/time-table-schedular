const express = require('express');
const announcementController = require('../controllers/announcement');
const authController = require('../controllers/auth');

const router = express.Router();

// logged in user can access
router.use(authController.protect);
router.get('/', announcementController.getListOfAnnouncements);
router.route('/:id').get(announcementController.getAnnouncementByID);

router.use(authController.restrictTo('admin')); // admin & master can access
router.post('/', announcementController.createNewAnnouncement);
router.delete('/:id', announcementController.deleteAnnouncementByID);

module.exports = router;
