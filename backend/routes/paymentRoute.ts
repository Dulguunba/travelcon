import { Router } from "express";
import { checkPayment, createInvoice, createPayment, getPayment } from "../controllers/paymentController";

const paymentRouter = Router();
paymentRouter.route("/create").post(createPayment);
paymentRouter.route("/get").get(getPayment);
paymentRouter.route("/createinvoice").post(createInvoice)
paymentRouter.route("/check").post(checkPayment)


export default paymentRouter;
