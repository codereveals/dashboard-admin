import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDb = async () => {
  if (isConnected) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL, {

      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000, // 30 seconds timeout
    });

    isConnected = connection.readyState === 1; // 1 means connected
    console.log(`Connected to Database: ${connection.host}`);
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};
