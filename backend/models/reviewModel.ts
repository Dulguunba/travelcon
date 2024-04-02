import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  travelId: {
    type: String,
    required: [true, "Please insert input"],
  },
  starts: {
    type: Number,
    required: [true, "Please insert input"],
    max: [5, "wrong star number"],
  },
  comment: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: [true, "Please insert input"],
  },
  updatedAt: {
    type: Date,
    required: [true, "Please insert input"],
  },
});

export const ReviewModel = model("reviews", reviewSchema);
