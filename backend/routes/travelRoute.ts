import { Router } from "express";
import { createTravel, deleteTravel, getTravel } from "../controllers/travelController";

const travelRouter = Router();
travelRouter.route("/create").post(createTravel);
travelRouter.route("/get").get(getTravel);
travelRouter.route("/delete").delete(deleteTravel)

export { travelRouter };
