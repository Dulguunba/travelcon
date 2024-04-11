import React from "react";
import { getServerSideProps } from "./TourDetailHero";
import { FetchDataProps } from "@/types/fetchDataProps";
import { useRouter } from "next/router";
import { CheckIcon, XIcon } from "@/components/icons/travelDetail";
import Link from "next/link";
import { useTravelCartStore } from "@/functions/AdminFunctions";

const Included = ({ toursData, travelDatas }: FetchDataProps) => {
  const router = useRouter();
  const { tour } = router.query;
  const { travelId, removeTravel, updateTravel } = useTravelCartStore();

  //   const AddTravelToCart = () => {
  //     router.push("/bookingorder");

  //     updateTravel(String(tour));
  //   };
  //   console.log("travelId", travelId);
  return (
    <>
      {travelDatas.result.map((data) =>
        data._id === tour ? (
          <div className="mt-14 flex flex-col gap-20 lg:justify-between">
            <div className="flex flex-col gap-5 lg:mb-0 mb-5">
              <div className="lg:text-[40px] text-3xl font-oswald font-bold">
                INCLUDED
              </div>
              <div>
                <ul className="font-primary">
                  {data.food.IsIncludeFoodCheck ? (
                    <li className="text-green-700 font-semibold text-2xl flex items-center gap-2">
                      <CheckIcon />
                      Food
                    </li>
                  ) : (
                    <li className="text-red-500 font-semibold text-2xl flex items-center gap-2">
                      <XIcon />
                      Food
                    </li>
                  )}
                  {data.traffic.IsIncludeTrafficCheck ? (
                    <li className="text-green-700 font-semibold text-2xl flex items-center gap-2">
                      <CheckIcon />
                      Traffic
                    </li>
                  ) : (
                    <li className="text-red-500 font-semibold text-2xl flex items-center gap-2">
                      <XIcon />
                      Traffic
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:w-[615px]">
              <div className="relative">
                <img
                  src={data.image.mainImage}
                  className="w-full lg:h-[204px] h-full rounded-3xl"
                  alt="Main Image"
                />
                <div className="w-full lg:h-[204px] rounded-3xl bg-[#D9D9D9] absolute top-0 opacity-30"></div>
                <div className="absolute flex top-12 left-10 items-start flex-col gap-5 justify-center ">
                  <h1 className="font-oswald text-black font-bold lg:text-3xl">
                    {" "}
                    Ready for an adventure?
                  </h1>
                  <Link href={`/bookingorder/${tour}`}>
                    <button className="p-3 bg-black font-normal text-white lg:text-[20px] font-primary rounded-xl border border-black btn">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}
    </>
  );
};

export { getServerSideProps };

export default Included;
