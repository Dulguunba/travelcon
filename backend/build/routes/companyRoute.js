"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companyControllers_1 = require("../controllers/companyControllers");
const companyRouter = (0, express_1.Router)();
companyRouter.route("/create").post(companyControllers_1.createCompany);
companyRouter.route("/get").get(companyControllers_1.getCompany);
companyRouter.route("/delete").delete(companyControllers_1.deleteCompany);
exports.default = companyRouter;
