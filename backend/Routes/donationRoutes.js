const express = require('express');
const router = express.Router();
const {createDonation, getAllDonations, updateDonationStatus} = require('../controllers/donationControllers');
// const {authMiddleware} = require('../middleware/auth');

// Create donation route
router.post('/', authMiddleware, createDonation);

// Fetch all donations route
router.get('/', getAllDonations);

// Update donation status route
router.put('/:donationId', authMiddleware, updateDonationStatus);

module.exports = router;
