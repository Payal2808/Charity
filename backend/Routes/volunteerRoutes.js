const express = require('express');
const router = express.Router();
const {assignVolunteer} = require('../controllers/volunterController');
const {authMiddleware} = require('../middleware/auth');

// Assign volunteer route
router.post('/assign', authMiddleware, assignVolunteer);

module.exports = router;
