import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import restaurantRoutes from "./routes/restaurants.js";
import orderRoutes from "./routes/orders.js";
import customerRoutes from "./routes/customers.js";
import menuRoutes from "./routes/menuItems.js";
import reviewRoutes from "./routes/reviews.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/menu-items", menuRoutes);
app.use("/api/reviews", reviewRoutes);

// Default fallback route
app.get("/", (req, res) => {
  res.send("Welcome to the Restaurant API!");
});

// Start the server after database is connected
async function startServer() {
  const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost:27017/restaurant_db";

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if unable to connect
  }
}

startServer();
