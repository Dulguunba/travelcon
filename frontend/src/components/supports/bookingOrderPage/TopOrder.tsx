import React from "react";
import { FetchDataProps } from "@/types/fetchDataProps";
import Header from "../homePage/Header";
import { useRouter } from "next/router";

export const TopOrder = ({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) => {
  const router = useRouter();
  const { tour } = router.query;
  return (
    <>
      {travelDatas.result.map((travelData) => travelData._id === tour
        ? <img
          src={travelData.image.mainImage}
          className="lg:w-full lg:h-[800px]"
          alt=""
        />
        : null
      )}
      <div className="absolute top-0 right-0  w-full bg-blue"></div>
      <div className="absolute top-0 right-0 left-0">
        <Header
          travelDatas={travelDatas}
          toursData={toursData}
          destinationDatas={destinationDatas}
          categoryDatas={categoryDatas}
        />
        <div className="lg:max-w-[1520px] lg:m-auto lg:w-[90%]  flex justify-center">
          <div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center drop-shadow-md">
                <h1 className="lg:text-3xl text-white font-primary lg:text-[32px] text-sm lg:leading-10 drop-shadow-md lg:tracking-widest ">
                  TRAVEL TO MONGOLIA
                </h1>
                <h1 className="font-oswald drop-shadow-md font-bold lg:text-[200px] xl:text-[200px] text-[50px] text-white ">
                  BOOKING DETAIL
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
