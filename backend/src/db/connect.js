
import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected:", conn.connection.host);
  } catch (error) {
    console.error("MongoDB connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
