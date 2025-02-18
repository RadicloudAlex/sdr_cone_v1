const express = require('express');
const router = express.Router();
const authController = require('../controllers/userController.js');

router.post('/register', authController.register);

module.exports = router;
