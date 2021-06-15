const express = require('express');
const courseController = require('../controllers/course');

const router = express.Router();

router
  .route('/')
  .get(courseController.getListOfCourses)
  .post(courseController.createNewCourse);
router
  .route('/:id')
  .get(courseController.getCourseByID)
  .put(courseController.updateCourseByID)
  .delete(courseController.deleteCourseByID);
router.get('/:id/timeTalbes', courseController.getCourseTimeTables);
router.get('/:id/masters');
router.post('/:id/choose');

module.exports = router;
