"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.travelCalendar = void 0;
const mongoose_1 = require("mongoose");
const calendar = new mongoose_1.Schema({
    startTime: { type: Date, default: new Date() },
    endTime: { type: Date, default: new Date() },
});
exports.travelCalendar = (0, mongoose_1.model)("travelCalendar", calendar);
