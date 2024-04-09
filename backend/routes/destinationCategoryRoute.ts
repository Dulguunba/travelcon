import { Router } from "express";
import { getDestinationCategory, createDestinationCategory, deleteDestinationCategory } from "../controllers/destinationCategoryControllers";

const destinationCategoryRouter = Router();
destinationCategoryRouter.route("/create").post(createDestinationCategory);
destinationCategoryRouter.route("/get").get(getDestinationCategory);
destinationCategoryRouter.route("/delete").delete(deleteDestinationCategory)

export default destinationCategoryRouter;
