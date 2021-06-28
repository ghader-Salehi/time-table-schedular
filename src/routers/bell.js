const express = require('express');
const bellController = require('../controllers/bell');
const authController = require('../controllers/auth');

const router = express.Router();

router.use(authController.protect); // logged in user can access
router.get('/', bellController.getListOfBells);
router.get('/:id', bellController.getBellByID);

router.use(authController.restrictTo('admin')); // only admin can access
router.post('/', bellController.createNewBell);
router
  .route('/:id')
  .delete(bellController.deleteBellByID)
  .patch(bellController.updateBellByID);

module.exports = router;
