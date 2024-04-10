import Image from "next/image";
import { Inter } from "next/font/google";
import { OrderCard } from "@/components/supports/bookingOrderPage/OrderCard";
import { FormComponent } from "@/components/supports/destinationPage/FormComponent";
import { FetchDataProps } from "@/types/fetchDataProps";
import { TopOrder } from "@/components/supports/bookingOrderPage/TopOrder";
import { getServerSideProps } from "../utils/fetchTravelDatas";
import { OrderTour } from "@/components/supports/bookingOrderPage/OrderTour";
import { LocalAirport } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useTravelCartStore } from "@/functions/AdminFunctions";
import { useEffect, useState } from "react";
import { getTravelId } from "@/functions/TravelUtilities";
import { TravelObjectType } from "@/types/travelTypes";
const inter = Inter({ subsets: ["latin"] });

function Bookingorder({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) {
  const { travelId, updateTravel, removeTravel } = useTravelCartStore();
  const [travelChoose, setTravelChoose] = useState<TravelObjectType>();
  useEffect(() => {
    getTravelId(setTravelChoose, travelId);
  }, []);

  return (
    <main>
      <TopOrder
        travelDatas={travelDatas}
        destinationDatas={destinationDatas}
        categoryDatas={categoryDatas}
        toursData={toursData}
      />
      <div className="flex w-full items-start justify-center h-full">
        <div className="mt-10 max-w-[1520px] w-[90%]  h-full flex items-center gap-6">
          <div className="w-1/3 flex h-full items-start">
            <div className="w-full flex flex-col">
              <h1 className="w-full rounded-t-lg bg-gray-50 font-bold text-2xl p-4 border border-gray-100">
                Price Summary
              </h1>
              <div className="w-full border border-gray-100 p-4 flex flex-col gap-2">
                <div className="w-full flex justify-between">
                  <h2 className="flex justify-center">Adult</h2>
                  <p className="flex justify-center">1x</p>
                  <p className="flex justify-center">15000</p>
                </div>
                <div className="w-full  flex justify-between">
                  <h2 className="flex justify-center">Child</h2>
                  <p className="flex justify-center">1x</p>
                  <p className="flex justify-center">15000</p>
                </div>
              </div>
              <div className="w-full rounded-b-lg bg-gray-50 font-bold text-2xl p-4 border border-gray-100 flex justify-between">
                <h1>Total amount</h1>
                <h1>30000</h1>
              </div>
            </div>
          </div>
          <div className="w-2/3 flex flex-col gap-2">
            <div className="w-full flex flex-col ">
              <h1 className="w-full rounded-t-lg bg-gray-50 font-bold text-2xl p-4 border border-gray-100">
                Tour Summary
              </h1>
              <div className="w-full border border-gray-100 rounded-b-lg p-4 flex  gap-2">
                <div className="w-2/5">
                  <img src="Mountain.pic" alt="travel tour image" />
                </div>
                <div className="w-2/5 flex flex-col gap-2">
                  <h1 className="text-blue text-xl uppercase">
                    {travelChoose?.name}
                  </h1>
                  <div className="flex justify-start gap-2">
                    <LocationOnIcon />
                    <p>{travelChoose?.destination.english} province</p>
                  </div>
                  <div className="flex gap-2 justify-start">
                    <span>{travelChoose?.duration}</span>
                    <span>days</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col ">
              <h1 className="w-full rounded-t-lg bg-gray-50 font-bold text-2xl p-4 border border-gray-100">
                Travel Calendar Summary
              </h1>
              <div className="w-full border border-gray-100 rounded-b-lg p-4 flex gap-2">
                <h2>Choose travel calendar</h2>
                <select name="travel calendar" id="travel"></select>
              </div>
            </div>
            <div className="w-full flex flex-col ">
              <h1 className="w-full rounded-t-lg bg-gray-50 font-bold text-2xl p-4 border border-gray-100">
                Booking Summary
              </h1>
              <div className="w-full border border-gray-100 rounded-b-lg p-4 flex gap-2">
                <div className="w-full flex gap-2 justify-start">
                  <h2 className="w-1/2">Adult</h2>
                  <div className="w-1/3 flex items-center justify-center">
                    <button className={`rounded p-2 bg-blue`}>+</button>
                    <input type="number" />

                    <button className={`rounded p-2 bg-blue`}>-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <FormComponent />
          <OrderTour /> */}
          {/* <OrderCard calendar={calendars} /> */}
        </div>
      </div>
    </main>
  );
}

export { getServerSideProps };

export default Bookingorder;
