import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

export const dataBase = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("berhasil connect database");
  } catch (error) {
    console.error("tidak berhasil connect database", error);
    process.exit(1);
  }
};
