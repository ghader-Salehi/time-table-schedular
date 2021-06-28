const express = require('express');
const dayController = require('../controllers/day');
const authController = require('../controllers/auth');

const router = express.Router();

router.use(authController.protect); // logged in user can access
router.get('/', dayController.getListOfDays);
router.route('/:id').get(dayController.getDayByID);

router.use(authController.restrictTo('admin')); // only admin can access
router
  .route('/:id')
  .patch(dayController.updateDayByID)
  .delete(dayController.deleteDayByID);
router.post('/', dayController.createNewDay);

module.exports = router;
