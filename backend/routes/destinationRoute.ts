import { Router } from "express";
import { getDestination, createDestination, deleteDestination } from "../controllers/destinationControllers";

const destinationRouter = Router();
destinationRouter.route("/create").post(createDestination);
destinationRouter.route("/get").get(getDestination);
destinationRouter.route("/delete").delete(deleteDestination)

export default destinationRouter;
