const express = require('express');
const timeTableController = require('../controllers/timeTable');
const authController = require('../controllers/auth');

const router = express.Router();
router.use(authController.protect);
router.get('/', timeTableController.getListOfTimeTalbes);
router.get('/:id', timeTableController.getTimeTableByID);
router.post('/:id/choose', timeTableController.chooseTimeTableByStudent);
router.post('/startProcess');

module.exports = router;
