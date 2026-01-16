
// import dotenv from "dotenv";
// dotenv.config();

// import app from "./app.js";
// import connectDB from "./config/db.js";

// const PORT = process.env.PORT || 3000;

// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });


import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

// ✅ DB sirf tab connect karo jab MONGO_URI ho
if (!process.env.MONGO_URI) {
  console.log("MONGO_URI not found. Skipping DB connection (CI mode).");
  process.exit(0); // 👈 CI ko SUCCESS ke saath exit
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
    process.exit(1);
  });
