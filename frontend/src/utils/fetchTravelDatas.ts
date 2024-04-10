import axios from "axios";
import { GetServerSideProps } from "next";
import { Tours } from "@/types/toursTypes";
import { Travel } from "@/types/travelTypes";
import { DestinationCategory } from "@/types/destinationCategoryTypes";
import { Destination } from "@/types/destinationTypes";
import { instance } from "./functions/TravelUtilities";
import { Review } from "@/types/reviewTypes";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const travelRes = await instance.get("/travel/get");
    const travelDatas: Travel = travelRes.data;

    const toursRes = await instance.get("tourist/get");
    const toursData: Tours = toursRes.data;

    const categoryRes = await instance.get("/destinationcategory/get");
    const categoryDatas: DestinationCategory = categoryRes.data;

    const destinationRes = await instance.get("/destination/get");
    const destinationDatas: Destination = destinationRes.data;

    const res = await instance.get("/review/get");
    const reviewDatas: Review = res.data;

    return {
      props: {
        travelDatas,
        toursData,
        categoryDatas,
        destinationDatas,
        reviewDatas,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        travelDatas: [],
        toursData: [],
        categoryDatas: [],
        destinationDatas: [],
        reviewDatas: [],
      },
    };
  }
};

export const getDestinationCategory = async (set: Function) => {
  try {
    const response = await instance.get("/destinationcategory/get");
    set(response.data.result);
  } catch (error) {
    return alert(`Уучлаарай алдаа үүслээ`);
  }
};

export const filterTravelDestinationCategory = async (set: Function) => {
  try {
    const destinationResponse = await instance.get("/destination/get");
    const destinationData = destinationResponse.data.result;

    const destinationCategoryResponse = await instance.get(
      "/destinationcategory/get"
    );
    const destinationCategory = destinationCategoryResponse.data.result;

    const filterDestination = [];

    // for (let i = 0; i < destinationCategory.length; i++) {
    //   const destinationCategoryId = destinationCategory[i]._id;
    //   const destination =
    //   for (let t = 0; t < destinationData.length; t++) {
    //     if (destinationData.destinationCategory == destinationCategoryId) {
    //       cons
    //     }
    //   }
    // }

    [{ english: "", des: [] }];
  } catch (error) {}
};
