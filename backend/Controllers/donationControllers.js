const Donation = require('../models/Donation');

const DonationController = {
    createDonation: async (req, res) => {
        try {
            const { donor, item, description, photo } = req.body;

            // Create a new donation
            const newDonation = new Donation({
                donor,
                item,
                description,
                photo
            });

            // Save the donation to the database
            await newDonation.save();

            res.status(201).json({ message: 'Donation created successfully', donation: newDonation });
        } catch (error) {
            console.error('Error creating donation:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getAllDonations: async (req, res) => {
        try {
            // Fetch all donations from the database
            const donations = await Donation.find();

            res.status(200).json(donations);
        } catch (error) {
            console.error('Error fetching donations:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    updateDonationStatus: async (req, res) => {
        try {
            const { donationId } = req.params;
            const { status } = req.body;

            // Find the donation by ID and update its status
            const donation = await Donation.findByIdAndUpdate(donationId, { status }, { new: true });

            if (!donation) {
                return res.status(404).json({ message: 'Donation not found' });
            }

            res.status(200).json({ message: 'Donation status updated successfully', donation });
        } catch (error) {
            console.error('Error updating donation status:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

module.exports = DonationController;
