import Image from "next/image";
import { Inter } from "next/font/google";
import { OrderCard } from "@/components/supports/bookingOrderPage/OrderCard";
import { FormComponent } from "@/components/supports/destinationPage/FormComponent";
import { FetchDataProps } from "@/types/fetchDataProps";
import { TopOrder } from "@/components/supports/bookingOrderPage/TopOrder";
import { getServerSideProps } from "@/utils/fetchTravelDatas";
import { OrderTour } from "@/components/supports/bookingOrderPage/OrderTour";
import { LocalAirport } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useTravelCartStore } from "@/functions/AdminFunctions";
import { useEffect, useState } from "react";
import { getTravelId } from "@/functions/TravelUtilities";
import { TravelObjectType } from "@/types/travelTypes";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

function Bookingorder({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) {
  const router = useRouter();
  const { tour } = router.query;
  const { travelId, updateTravel, removeTravel } = useTravelCartStore();
  const [travelChoose, setTravelChoose] = useState<TravelObjectType>();

  const [checkedIndex, setCheckedIndex] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const handleCheckboxChange = (index: any) => {
    setCheckedIndex(index);
  }

  const [childCount, setChildCount] = useState(0);
  const [adultCount, setAdultCount] = useState(1);

  const handleChildIncrement = () => {
    if (childCount < 20 - 1) {
      setChildCount(childCount + 1);
    }
  };

  const handleChildDecrement = () => {
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  };

  const handleAdultIncrement = () => {
    if (adultCount < 20) {
      setAdultCount(adultCount + 1);
    }
  };

  const handleAdultDecrement = () => {
    if (adultCount > 1) {
      setAdultCount(adultCount - 1);
    }
  };

  return (
    <>
      {travelDatas.result.map((travel) =>
        travel._id === tour ? (
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
                        <p className="flex justify-center">{adultCount}x</p>
                        <p className="flex justify-center">
                          {travel.price.adultPrice}
                        </p>
                      </div>
                      <div className="w-full  flex justify-between">
                        <h2 className="flex justify-center">Child</h2>
                        <p className="flex justify-center">{childCount}x</p>
                        <p className="flex justify-center">
                          {travel.price.childPrice}
                        </p>
                      </div>
                    </div>
                    <div className="w-full rounded-b-lg bg-gray-50 font-bold text-2xl p-4 border border-gray-100 flex justify-between">
                      <h1>Total amount</h1>
                      <h1>
                        {adultCount * travel.price.adultPrice +
                          childCount * travel.price.childPrice}
                      </h1>
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
                        <img
                          src={travel.image.mainImage}
                          alt="travel tour image"
                          className="rounded-lg h-40"
                        />
                      </div>
                      <div className="w-2/5 flex flex-col gap-2 justify-center">
                        <h1 className="text-blue text-xl uppercase">
                          {travel.name}
                        </h1>
                        <div className="flex justify-start gap-2">
                          <LocationOnIcon />
                          <p className="capitalize">{travel.destination.english}</p>
                        </div>
                        <div className="flex gap-2 justify-start">
                          <span>{travel.duration}</span>
                          <span>days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col ">
                    <h1 className="w-full rounded-t-lg bg-gray-50 font-bold text-2xl p-4 border border-gray-100">
                      Travel Calendar Summary
                    </h1>
                    <div className="w-full border border-gray-100 rounded-b-lg p-4 flex flex-col gap-2">
                      <h2>Choose travel calendar</h2>
                      <select name="travel calendar" id="travel">
                        <option value="">
                          <div className="w-[200px] bg-blue">
                            asdasd
                          </div>
                        </option>
                        <option value="">asdasd</option>
                      </select>
                      {/* <div className='flex items-center w-full flex-col gap-10 justify-center mt-5'>
                        {travel.calendar.map((cal, index) => (
                          <div className='flex gap-4 ml-12 items-center'>
                            <input
                              type="checkbox"
                              className="checkbox"
                              onChange={() => handleCheckboxChange(index)}
                              checked={checkedIndex === index}
                            />
                            <div className='w-[1000px] bg-grayColor flex flex-col'>
                              <div className='w-full bg-gray-200 p-5 flex justify-between'>
                                <h1>Check-in</h1>
                                <h1>Check-out</h1>
                                <h1>Adult</h1>
                                <h1>Child</h1>
                                <h1>Total Price</h1>
                              </div>
                              <div className='w-full flex justify-between p-5'>
                                <h1>{cal.startDay}</h1>
                                <h1>{cal.endDay}</h1>
                                <input type="number" value={adults} onChange={(e) => setAdults(parseInt(e.target.value))} />
                                <input type="number" value={children} onChange={(e) => setChildren(parseInt(e.target.value))} />
                                <h1>{travel.price.childPrice}</h1>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div> */}
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
                          <button
                            className={`rounded p-2 w-8 h-8 bg-blue text-white flex justify-center items-center`}
                            onClick={handleAdultIncrement}
                          >
                            +
                          </button>
                          <input
                            type="number"
                            className="h-8 p-2 w-24 rounded border border-gray-50"
                            min={0}
                            max={travel.maxTourist}
                            value={childCount}
                            readOnly
                          />
                          <button
                            className={`rounded p-2 w-8 h-8 bg-blue text-white flex justify-center items-center`}
                            onClick={handleAdultDecrement}
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div className="w-full flex gap-2 justify-start">
                        <h2 className="w-1/2">Adult</h2>
                        <div className="w-1/3 flex items-center justify-center">
                          <button
                            className={`rounded p-2 w-8 h-8 bg-blue text-white flex justify-center items-center`}
                            onClick={handleChildIncrement}
                          >
                            +
                          </button>
                          <input
                            type="number"
                            className="h-8 p-2 w-24 rounded border border-gray-50"
                            min={1}
                            max={travel.maxTourist}
                            value={childCount}
                          />
                          <button
                            className={`rounded p-2 w-8 h-8 bg-blue text-white flex justify-center items-center`}
                            onClick={handleChildDecrement}
                          >
                            -
                          </button>
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
        ) : null
      )}
    </>
  );
}

export { getServerSideProps };

export default Bookingorder;
