const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    volunteer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assignedDonation: { type: mongoose.Schema.Types.ObjectId, ref: 'Donation', required: true }
}, { timestamps: true });

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
