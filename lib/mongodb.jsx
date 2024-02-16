import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected");
  } catch (err) {
    console.log(err);
  }
};

export default connection;
