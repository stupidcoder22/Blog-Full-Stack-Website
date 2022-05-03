import mongoose from "mongoose";

const url = "mongodb://localhost:27017/BLOG";
const connection = async () => {
  const success = await mongoose.connect(url);
  if (success) {
    console.log("connected to database");
  } else {
    console.log("error in database");
  }
};

export default connection;
