const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    item: { type: String, required: true },
    description: { type: String },
    photo: { type: String },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    assignedVolunteer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // If assigned to a volunteer
}, { timestamps: true });

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
