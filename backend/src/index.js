
import { app } from "./app.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import { seedDatabase } from "./utils/seedDatabase.js";
dotenv.config();

const startServer = async () => {
  try {
    await connectDB();
    await seedDatabase();

    app.on("error", (error) => {
      console.error("App error:", error);
      throw error;
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log("Server running on port", process.env.PORT || 3000);
    });

  } catch (error) {
    console.error("Server failed to start", error);
  }
};

startServer();
