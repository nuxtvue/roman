import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    countQueriesGigachat: {
      type: Number,
      default: 0,
    },
    countQueriesFromDatabase: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
