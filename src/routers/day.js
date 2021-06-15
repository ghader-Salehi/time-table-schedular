const express = require('express');
const dayController = require('../controllers/day');

const router = express.Router();

router
  .route('/')
  .get(dayController.getListOfDays)
  .post(dayController.createNewDay);
router
  .route('/:id')
  .get(dayController.getDayByID)
  .patch(dayController.updateDayByID)
  .delete(dayController.deleteDayByID);

module.exports = router;
