const express = require('express');
const bellController = require('../controllers/bell');

const router = express.Router();
router
  .route('/')
  .get(bellController.getListOfBells)
  .post(bellController.createNewBell);
router
  .route('/:id')
  .get(bellController.getBellByID)
  .delete(bellController.deleteBellByID)
  .patch(bellController.updateBellByID);

module.exports = router;
