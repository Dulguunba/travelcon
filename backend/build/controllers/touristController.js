"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTourist = exports.createTourist = void 0;
const touristModel_1 = require("../models/touristModel");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createTourist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, english, group } = req.body;
    console.log("name", name, "english", english, group);
    try {
        const newTourist = yield touristModel_1.TouristModel.create({
            name,
            english,
            group,
            createdAt: new Date(),
        });
        res.status(200).json({ message: "successfully created tourist" });
    }
    catch (error) {
        res.status(400).json({ message: "fail to create tourist" });
    }
});
exports.createTourist = createTourist;
const getTourist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const touristData = yield touristModel_1.TouristModel.find({}).exec();
        res.status(200).json({ result: touristData });
    }
    catch (error) {
        res.status(400).json({ message: "fail to get tourist data", error: error });
    }
});
exports.getTourist = getTourist;
