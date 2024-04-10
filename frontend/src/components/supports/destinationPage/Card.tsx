import React from "react";
import { Dollar, LocationWhite } from "@/components/icons/destinationPage";
import { FetchDataProps } from "@/types/fetchDataProps";
import { FetchAdminDataProps } from "@/types/dashboardAdminCard";
import { TravelObjectType } from "@/types/travelTypes";
import Link from "next/link";

export const Card = ({ travelData }: { travelData: TravelObjectType }) => {
  const LearnMore = () => {
    console.log("first");
  };
  const regex = /\B(?=(\d{3})+(?!\d))/g;

  return (
    <>
      <div id="card" className={`card`}>
        <img
          className="rounded-3xl w-full h-full absolute -z-[1]"
          src={`${travelData?.image?.mainImage}`}
          alt="gazriin zurag"
        />
        <div className="image">
          <h1> {travelData?.name}</h1>
          <div id="p" className="flex items-center  gap-5">
            <div className="flex items-center w-[132px] gap-2">
              <LocationWhite />
              <p>{travelData?.duration} days</p>
            </div>
            <p>|</p>
            <div className="flex items-center w-[132px] gap-2">
              <Dollar />
              <p>Start from ₮{travelData?.price.adultPrice}</p>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="center">
            <h1
              className={` text-[32px] font-bold"
                }`}
            >
              {travelData?.name}
            </h1>
            <div className="flex items-center  gap-3">
              <div className="flex items-center w-[132px] gap-3">
                <LocationWhite />
                <p>{travelData?.duration}</p>
              </div>
              <p>|</p>
              <div className="flex items-center w-[132px] gap-3">
                <Dollar />
                <p>Start from ₮{travelData?.price.adultPrice}</p>
              </div>
            </div>
            <p className="overflow-hidden h-12">{travelData?.additionalInfo}</p>
            <Link href={`/tours/${travelData._id}`}>
              <button className="button">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
