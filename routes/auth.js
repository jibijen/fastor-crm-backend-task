const express = require('express');
const router = express.Router();
const {
  registerEmployee,
  loginEmployee,
} = require('../controllers/authController'); // Make sure this path has ../

// API for Employee login/register
router.post('/register', registerEmployee);
router.post('/login', loginEmployee);

module.exports = router;