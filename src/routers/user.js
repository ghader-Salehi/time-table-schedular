const express = require('express');
const userController = require('./../controllers/user');
const authController = require('./../controllers/auth');

const router = express.Router();

router.use(authController.protect);
router.get('/', userController.getAllUsers);
router.post('/add', userController.createNewUser);
router.post('/addlist', userController.createAListOfUsers);

module.exports = router;
