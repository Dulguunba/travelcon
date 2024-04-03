import { UserModel } from "../models/userModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const createOrder = async (req: Request, res: Response) => {
  const {
    orderNumber,
    status,
    phoneNumber,
    travelDate,
    amountPaid,
    amountToBePaid,
    coupon,
    description,
    details,
  } = req.body;

  //   try {
  //     const hashPassword = await bcrypt.hash(password, 10);
  //     const newUser = await UserModel.create({
  //       userName,
  //       email,
  //       phoneNumber,
  //       password: hashPassword,
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //     });
  //     res
  //       .status(200)
  //       .json({ message: "successfully created user account", result: newUser });
  //   } catch (error) {
  //     res.status(400).json({ message: "fail to create user account" });
  //   }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const userQuery = UserModel.find({});
    userQuery.sort("-createdAt");
    userQuery.select("_id userName email phoneNumber");
    const userData = await userQuery.exec();
    res.status(200).json({ result: userData });
  } catch (error) {
    res.status(400).json({ message: "fail to get user data", error: error });
  }
};
// export const deleteUser = async(req: Request, res: Response)=>{
//   try {
//     const {} =req.body
//   } catch (error) {
//     res.status(400).json({ message: "fail to delete user data", error: error });
//   }
// }