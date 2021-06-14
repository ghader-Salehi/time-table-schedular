const express = require('express');
const userController = require('./../controllers/user');
const authController = require('./../controllers/auth');

const router = express.Router();

router.use(authController.protect);
router.get('/', userController.getAllUsers);
router
  .route('/profile')
  .patch(userController.updateUserProfile)
  .get(userController.getUserProfile);
router.patch('/changepassword', userController.updateUserPassword);
router
  .route('/:id')
  .get(userController.getUserByID)
  .patch(userController.updateUserProfileWithParamID)
  .delete(userController.deleteUserByID);
router.post('/add', userController.createNewUser);
router.post('/addlist', userController.createAListOfUsers);

module.exports = router;
