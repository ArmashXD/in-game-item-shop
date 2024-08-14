const express = require('express');
const { authSignup , authLogin } = require('../controllers/authController');

const router = express.Router();

router.post('/auth/login', authLogin);
router.post('/auth/signup', authSignup);

module.exports = router;
