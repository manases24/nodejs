import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  level: String,
  message: {
    type: String,
    required: true,
  },
  origin: String,
  createdAt: String,
});
