import { Router } from "express";
import { createTravel, getNumberTravelLastWeek, getNumberofTravel, getTravel, getTravelByDestination } from "../controllers/travelController";

const travelRouter = Router();
travelRouter.route("/create").post(createTravel);
travelRouter.route("/get").get(getTravel);
travelRouter.route("/destination").post(getTravelByDestination)
travelRouter.route("/number").get(getNumberofTravel)
travelRouter.route("/numberlastweek").get(getNumberTravelLastWeek)



export { travelRouter };
