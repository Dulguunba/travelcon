import { Router } from "express";
import { createTourist, deleteTourist, getTourist } from "../controllers/touristController";

const touristRouter = Router();
touristRouter.route("/create").post(createTourist);
touristRouter.route("/get").get(getTourist);
touristRouter.route("/delete").delete(deleteTourist);

export default touristRouter;
