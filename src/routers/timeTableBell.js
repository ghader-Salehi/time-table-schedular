const express = require('express');
const timeTableBellController = require('../controllers/timeTableBell');
const authController = require('../controllers/auth');

const router = express.Router();

router.use(authController.protect); // logged in user can access
router.use(authController.restrictTo('admin', 'master'));
router.get('/', timeTableBellController.getListOfTimeTableBells);
router.get('/:id', timeTableBellController.getTimeTableBellByID);

router.post('/choose/:id/:selection', authController.restrictTo('master'), timeTableBellController.chooseTimeTableBell);

router.use(authController.restrictTo('admin'));
router.post('/', timeTableBellController.createNewTimeTableBell);
router.delete('/:id', timeTableBellController.deleteTimeTableBellByID);

module.exports = router;
