import { TravelModel } from "../models/travelModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { consumers } from "stream";

dotenv.config();

export const createTravel = async (req: Request, res: Response) => {
  const {
    name,
    travelCompany,
    duration,
    price,
    food,
    traffic,
    categoryType,
    touristType,
    additionalInfo,
    image,
    route,
    calendar,
  } = req.body;
  console.log(
    name,
    travelCompany,
    duration,
    price,
    food,
    traffic,
    categoryType,
    touristType,
    additionalInfo,
    image,
    route,
    calendar
  );

  try {
    const newTravel = await TravelModel.create({
      name,
      travelCompany,
      duration,
      price,
      food,
      traffic,
      categoryType,
      touristType,
      additionalInfo,
      image,
      route,
      calendar,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log("newTravel", newTravel);
    res
      .status(200)
      .json({ message: "successfully created travel info", result: newTravel });
  } catch (error) {
    console.log("failt to create travel", error);
    res.status(400).json({ message: "fail to create travel " });
  }
};

export const getTravel = async (req: Request, res: Response) => {
  try {
    const travelData = await TravelModel.find({}).exec();
    res.status(200).json({ result: travelData });
  } catch (error) {
    res.status(400).json({ message: "fail to get tourist data", error: error });
  }
};

export const deleteTravel = async(req: Request, res: Response)=>{
  try {
    const { name,
      travelCompany,
      duration,
      price,
      food,
      traffic,
      categoryType,
      touristType,
      additionalInfo,
      image,
      route,
      calendar, } = req.body;
      if(!name || !duration || !food || !categoryType || !additionalInfo || !route){
        res.status(400).json({message:"undifined travel data"})
      }
      const deleteTravel = await TravelModel.deleteMany({name,
        travelCompany,
        duration,
        price,
        food,
        traffic,
        categoryType,
        touristType,
        additionalInfo,
        image,
        route,
        calendar,})
        res.status(201).json({message:"successfully to delete"})
  } catch (error) {
     res.status(400).json({message:"fail to delete travel"})
  }
}
