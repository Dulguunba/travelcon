"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const destinationCategoryControllers_1 = require("../controllers/destinationCategoryControllers");
const destinationCategoryRouter = (0, express_1.Router)();
destinationCategoryRouter.route("/create").post(destinationCategoryControllers_1.createDestinationCategory);
destinationCategoryRouter.route("/get").get(destinationCategoryControllers_1.getDestinationCategory);
destinationCategoryRouter.route("/delete").delete(destinationCategoryControllers_1.deleteDestinationCategory);
exports.default = destinationCategoryRouter;
