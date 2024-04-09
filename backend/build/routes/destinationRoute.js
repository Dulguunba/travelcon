"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const destinationControllers_1 = require("../controllers/destinationControllers");
const destinationRouter = (0, express_1.Router)();
destinationRouter.route("/create").post(destinationControllers_1.createDestination);
destinationRouter.route("/get").get(destinationControllers_1.getDestination);
destinationRouter.route("/delete").delete(destinationControllers_1.deleteDestination);
exports.default = destinationRouter;
