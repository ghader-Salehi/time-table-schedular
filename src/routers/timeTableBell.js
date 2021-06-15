const express = require('express');
const timeTableBellController = require('../controllers/timeTableBell');

const router = express.Router();
router
  .route('/')
  .get(timeTableBellController.getListOfTimeTableBells)
  .post(timeTableBellController.createNewTimeTableBell);
router
  .route('/:id')
  .get(timeTableBellController.getTimeTableBellByID)
  .delete(timeTableBellController.deleteTimeTableBellByID);

module.exports = router;
