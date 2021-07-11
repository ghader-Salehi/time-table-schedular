const express = require('express');
const userController = require('./../controllers/user');
const authController = require('./../controllers/auth');

const router = express.Router();

router.use(authController.protect); // logged in user can access
router
  .route('/profile')
  .patch(userController.updateUserProfile)
  .get(userController.getUserProfile);
router.patch('/changepassword', userController.updateUserPassword);

//only master can access this route
router.get('/timetablebells', authController.restrictTo('master'), userController.getMasterTimeTableBells);

// master and admin can access this route
router.use(authController.restrictTo('admin', 'master'))
router.get('/:id/courses', userController.getMasterCourses)


//only admin can access this route
router.use(authController.restrictTo('admin')); // only admin can access
router
  .route('/:id')
  .get(userController.getUserByID)
  .delete(userController.deleteUserByID);
router.get('/', userController.getAllUsers);
router.route('/:id').patch(userController.updateUserProfileWithParamID);
router.post('/add', userController.createNewUser);
router.post('/addlist', userController.createAListOfUsers);

module.exports = router;
