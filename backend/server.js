const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Import middleware
const authMiddleware = require('./middleware/auth');

// Import routes
const userRoutes = require('./routes/userRoutes');
// const donationRoutes = require('./routes/donationRoutes');
// const volunteerRoutes = require('./routes/volunteerRoutes');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Charity', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/users', userRoutes);
// app.use('/api/donations', authMiddleware, donationRoutes); // Protect donation routes with auth middleware
// app.use('/api/volunteers', authMiddleware, volunteerRoutes); // Protect volunteer routes with auth middleware

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
