const express = require('express');
const timeTableController = require('../controllers/timeTable');

const router = express.Router();
router.get('/', timeTableController.getListOfTimeTalbes);
router.get('/:id', timeTableController.getTimeTableByID);
router.post('/:id/choose');
router.post('/startProcess');

module.exports = router;
