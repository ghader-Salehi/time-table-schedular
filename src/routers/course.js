const express = require('express');
const courseController = require('../controllers/course');
const authController = require('../controllers/auth');

const router = express.Router();

router.use(authController.protect); // logged in users can access

router.get('/:id/timeTables', courseController.getCourseTimeTables);
router.get('/:id/masters', courseController.getCourseMasters);
router.get('/:id', courseController.getCourseByID);

router.use(authController.restrictTo('admin', 'master')); // admin & master can access
router.get('/', courseController.getListOfCourses);

// only master can access
router.post(
  '/:id/choose',
  authController.restrictTo('master'),
  courseController.chooseCourse
);

// only admin can access
router.use(authController.restrictTo('admin'));
router.post('/', courseController.createNewCourse);
router
  .route('/:id')
  .patch(courseController.updateCourseByID)
  .delete(courseController.deleteCourseByID);

module.exports = router;
