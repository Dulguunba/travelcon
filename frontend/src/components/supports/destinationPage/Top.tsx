import React from "react";
import { FetchDataProps } from "@/types/fetchDataProps";
import Header from "../homePage/Header";

const Top = ({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) => {
  return (
    <>
      <img src="DestinationHero.jpg" className="lg:w-full" alt="" />
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
                  TOURS
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
