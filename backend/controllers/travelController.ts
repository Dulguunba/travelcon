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
    destination,
    calendar,
    maxTourist,
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
    destination,
    route,
    calendar,
    maxTourist
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
      destination,
      calendar,
      createdAt: new Date(),
      updatedAt: new Date(),
      maxTourist,
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
    const travelQuery = TravelModel.find({}).populate("destination");
    travelQuery.sort("-createdAt");
    // travelQuery.select("_id travelName email phoneNumber");
    const travelData = await travelQuery.exec();
    res.status(200).json({ result: travelData });
  } catch (error) {
    res.status(400).json({ message: "fail to get travel data", error: error });
  }
};

export const getTravelByDestination = async (req: Request, res: Response) => {
  const { destinationId } = req.body;
  try {
    const travelQuery = TravelModel.find({})
    travelQuery.sort("-createdAt");
    const travelData = await travelQuery.exec()
    const destinationData = await travelData.filter((travel) => {
      travel.destination === destinationId;
    });
    const travelNumber = destinationData.length;
    res.status(200).json({ result: destinationData, count: travelNumber });
  } catch (error) {
    res.status(400).json({ message: "fail to get travel data by destination" });
  }
};

export const getNumberofTravel = async (req: Request, res: Response) => {
  try {
    const travelQuery = TravelModel.find({});
    travelQuery.sort("-createdAt");
    const travelData = await travelQuery.exec();
    const travelNumber = travelData.length;
    res.status(200).json({ result: travelNumber });
  } catch (error) {
    res.status(400).json({ message: "fail to get travel number" });
  }
};

export const getNumberTravelLastWeek = async (req: Request, res: Response) => {
  const today = new Date();
  const lastWeek = new Date(today);
  const lastMonth = new Date(today);

  lastWeek.setDate(today.getDate() - 7);
  lastMonth.setDate(today.getDate()-30)
  const date = [];
  const travelNumber = [];

  try {
    const travelQuery = TravelModel.find({});
    travelQuery.sort("-createdAt");
    const travelData = await travelQuery.exec();
    const totalTravelNumber = travelData.length

    for (let i = lastWeek; i <= today; i.setDate(i.getDate() + 1)) {
      const travelBeforeDate = travelData.filter(
        (travel) => travel.createdAt <= i
      );
      const numberTravelBeforeDate = travelBeforeDate.length;
      date.push(i);
      travelNumber.push(numberTravelBeforeDate);
    }
    const travelDataLastMonth = travelData.filter((travel)=> travel.createdAt <= lastMonth )
    const travelNumberLastMonth = travelDataLastMonth.length
    const changes = totalTravelNumber/travelNumberLastMonth-1 | 0;
    res.status(200).json({ result: { label: date, data: travelNumber, changes: changes } });
  } catch (error) {
    res.status(400).json({ message: "fail to get travel statistic" });
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
