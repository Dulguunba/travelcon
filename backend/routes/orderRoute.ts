import { Router } from "express";
import { createOrder, deleteOrder, getOrder } from "../controllers/orderController";

const orderRouter = Router();
orderRouter.route("/create").post(createOrder);
orderRouter.route("/get").get(getOrder);
orderRouter.route("/delete").delete(deleteOrder)


export default orderRouter;
