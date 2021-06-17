const express = require('express');
const courseController = require('../controllers/course');
const authController = require('../controllers/auth');

const router = express.Router();

router.use(authController.protect);
router
  .route('/')
  .get(courseController.getListOfCourses)
  .post(courseController.createNewCourse);
router
  .route('/:id')
  .get(courseController.getCourseByID)
  .patch(courseController.updateCourseByID)
  .delete(courseController.deleteCourseByID);
router.get('/:id/timeTables', courseController.getCourseTimeTables);
router.get('/:id/masters', courseController.getCourseMasters);
router.post('/:id/choose', courseController.chooseCourse);

module.exports = router;
