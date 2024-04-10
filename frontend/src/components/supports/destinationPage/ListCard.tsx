import {
  DollarBlack,
  LocationBlue,
  Time,
} from "@/components/icons/destinationPage";
import { DestinationCategory } from "@/types/destinationCategoryTypes";
import { Destination } from "@/types/destinationTypes";
import { FetchDataProps } from "@/types/fetchDataProps";
import { Tours } from "@/types/toursTypes";
import { Travel, TravelObjectType } from "@/types/travelTypes";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

interface Props {
  travelDatas: Travel;
  toursData: Tours;
  destinationDatas: Destination;
  categoryDatas: DestinationCategory;
}
export const ListCard = ({ travelData }: { travelData: TravelObjectType }) => {
  const LearnMore = () => {
    console.log("click learn more");
  };
  const route = useRouter();
  return (
    <>
      <div className="md:flex  rounded-xl  justify-between w-full gap-12">
        <img
          className="lg:w-[30%] w-[100%] h-[206px] rounded-3xl "
          src={`${travelData?.image?.mainImage}`}
          alt="winter"
        />
        <div className="lg:w-[40%] w-[100%]">
          <div className="max-w-[659px]">
            <div className="flex items-center gap-[10px] flex-wrap">
              <LocationBlue />
              <h3 className="font-normal text-blue text-[20px] leading-[30px]">
                {travelData?.name}
              </h3>
            </div>
            <h1 className="font-medium text-[32px] leading-[40px]  pt-[10px] pb-9">
              {travelData?.travelCompany}
            </h1>
            <p className="font-normal text-[20px] leading-[30px] flex-wrap overflow-hidden h-14">
              {travelData?.additionalInfo}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end w-[100%] lg:w-[25%]">
          <div className="flex items-center gap-4">
            <Time />
            <h3 className="font-normal text-[20px] leading-[30px]  text-[#222222]">
              {travelData?.duration} Days
            </h3>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <DollarBlack />
            <h3 className="font-normal text-[20px] leading-[30px]  text-[#222222]">
              Start from ₮{travelData?.price.adultPrice}
            </h3>
          </div>
          <div className="flex gap-4 pt-6">
            <Link href={`/tours/${travelData._id}`}>
              <button className=" cursor-pointer hover:-translate-y-1 transition ease-in-out rounded-[10px] bg-blue text-white font-medium text-[20px] leading-[30px] py-4 px-8">
                Learn more{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
