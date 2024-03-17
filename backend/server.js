const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const database = require("./config/config");
const PORT = 4000;

// Connect to MongoDB
database.connect();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*", credentials: true }));

// Import routes
const userRoutes = require("./Routes/userRoutes");

// Routes
app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
