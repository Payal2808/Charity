const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/Charity", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database is Connected"))
    .catch((err) => {
        console.log("Database connection failed", err);
        process.exit(1);
    });
};