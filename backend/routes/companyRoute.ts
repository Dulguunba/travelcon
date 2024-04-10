import { Router } from "express";
import { createCompany, deleteCompany, getCompany } from "../controllers/companyControllers";

const companyRouter = Router();
companyRouter.route("/create").post(createCompany);
companyRouter.route("/get").get(getCompany)
companyRouter.route("/delete").delete(deleteCompany)

export default companyRouter;
