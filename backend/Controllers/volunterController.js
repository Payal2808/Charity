const Volunteer = require('../models/Volunteer');
const Donation = require('../models/Donation');

const VolunteerController = {
    assignVolunteer: async (req, res) => {
        try {
            const { volunteerId, donationId } = req.body;

            // Check if the volunteer exists
            const volunteer = await Volunteer.findById(volunteerId);
            if (!volunteer) {
                return res.status(404).json({ message: 'Volunteer not found' });
            }

            // Check if the donation exists
            const donation = await Donation.findById(donationId);
            if (!donation) {
                return res.status(404).json({ message: 'Donation not found' });
            }

            // Check if the donation is already assigned to a volunteer
            if (donation.assignedVolunteer) {
                return res.status(400).json({ message: 'Donation is already assigned to a volunteer' });
            }

            // Assign the volunteer to the donation
            donation.assignedVolunteer = volunteerId;
            await donation.save();

            // Create a new volunteer assignment
            const newVolunteerAssignment = new Volunteer({
                volunteer: volunteerId,
                assignedDonation: donationId
            });
            await newVolunteerAssignment.save();

            res.status(200).json({ message: 'Volunteer assigned successfully' });
        } catch (error) {
            console.error('Error assigning volunteer:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

module.exports = VolunteerController;
