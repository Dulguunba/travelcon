import { Schema, model } from "mongoose";

const orderSchema = new Schema({

  IsPaidStatus: {
    type: Boolean,
    default: false,
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please insert input"],
  },
  firstName: {
    type: String,
    required: [true, "Please insert input"],
  },
  lastName: {
    type: String,
    required: [true, "Please insert input"],
  },
  email: {
    type: String,
    required: [true, "Please insert input"],
  },
  travelDate: {
    type: Object,
  },
  travelId:{
    type: Schema.ObjectId,
    ref: 'travelinfo',
    required: [true, 'please insert data']
  },
  amount: {
    type: Number,
    required: [true, "Please insert input"],
    default: 0,
  },
  description: {
    type: String,
  },
  details: {
    type: Array,
    // required: [true, "please insert data"],
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

export const OrderModel = model("orders", orderSchema);
