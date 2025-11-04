const express = require('express');
const router = express.Router();
const {
  submitEnquiry,
  getPublicEnquiries,
  claimEnquiry,
  getMyEnquiries,
} = require('../controllers/enquiryController');
const { protect } = require('../middleware/authMiddleware');

// Public form API [cite: 23]
// This route is public and does NOT use the 'protect' middleware
router.post('/submit', submitEnquiry);

// The following routes are protected and only accessible by logged-in employees

// API to fetch unclaimed leads [cite: 25]
router.get('/public', protect, getPublicEnquiries);

// API to claim leads [cite: 24]
router.post('/claim/:id', protect, claimEnquiry);

// API to fetch leads claimed by logged in user [cite: 26]
router.get('/my', protect, getMyEnquiries);

module.exports = router;
