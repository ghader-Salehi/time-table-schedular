const express = require('express');
const timeTableController = require('../controllers/timeTable');
const authController = require('../controllers/auth');

const router = express.Router();

// logged in users can access
router.use(authController.protect);
router.get('/', timeTableController.getListOfTimeTalbes);
router.get('/:id', timeTableController.getTimeTableByID);

// only student can access
router.post(
  '/:id/choose',
  authController.restrictTo('student'),
  timeTableController.chooseTimeTableByStudent
);

// only admin can access
router.post('/startProcess', authController.restrictTo('admin'));

module.exports = router;
