import { Schema, model } from "mongoose";

const calendar = new Schema({
  startTime: { type: Date, default: new Date() },
  endTime: { type: Date, default: new Date() },
});

export const travelCalendar = model("travelCalendar", calendar);
