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
exports.getCategory = exports.createCategory = void 0;
const categoryModel_1 = require("../models/categoryModel");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, english } = req.body;
    console.log("name", name, "english", english);
    try {
        const newCategory = yield categoryModel_1.CategoryModel.create({
            name,
            english,
            createdAt: new Date(),
        });
        res.status(200).json({ message: "successfully created category" });
    }
    catch (error) {
        res.status(400).json({ message: "fail to create category" });
    }
});
exports.createCategory = createCategory;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryData = yield categoryModel_1.CategoryModel.find({}).exec();
        res.status(200).json({ result: categoryData });
    }
    catch (error) {
        res.status(400).json({ message: "fail to get tourist data", error: error });
    }
});
exports.getCategory = getCategory;
