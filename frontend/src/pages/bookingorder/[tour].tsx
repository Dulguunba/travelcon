import { Inter } from "next/font/google";
import { FetchDataProps } from "@/types/fetchDataProps";
import { TopOrder } from "@/components/supports/bookingOrderPage/TopOrder";
import { getServerSideProps } from "@/utils/fetchTravelDatas";
import { Replay, Timeline } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {  useState } from "react";
import { useLoading } from "@/functions/UseLoading";
import { Loading } from "@/components/supports/Loading";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createOrder } from "@/utils/functions/Payment";
import {pay} from "@/utils/functions/Payment"

function Bookingorder({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) {
  const router = useRouter();
  const { tour } = router.query;

  const [qr, SetQr] = useState()
  const [hideGeneralSection, setHideGeneralSection] =useState(false)

  const [orderId, setOrderID] =  useState()

  const [childCount, setChildCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);

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

  const tourArray = travelDatas.result.filter(data => data._id === tour);
  const [checkedIndex, setCheckedIndex] = useState(0);

  const handleCheckboxChange = (index: any) => {
      setCheckedIndex(index);
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string().required("Phone number is required"),
    }),
    onSubmit: (values) => {
      const totalAmount = tourArray[0].price.adultPrice*adultCount+ tourArray[0].price.childPrice*childCount;
      const orderData = {
        lastname: formik.values.lastName,
        firstName: formik.values.firstName,
        email: formik.values.email,
        phoneNumber: formik.values.phoneNumber,
        travelId: tour,
        travelDate: tourArray[0].calendar[checkedIndex],
        amount: totalAmount
      };
      createOrder(setOrderID ,orderData);
      pay(SetQr);
      console.log('qr', qr);
      
    },
  });

  const isLoading = useLoading([
    travelDatas,
    ,
    toursData,
    destinationDatas,
    categoryDatas,
  ]);

  if (isLoading) {
    return <Loading />;
  }

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
                    <h1 className="w-full rounded-t-lg bg-gray-50 font-bold text-xl p-1 px-4 border border-gray-100">
                      Price Summary
                    </h1>
                    <div className="w-full border border-gray-100 p-4 flex flex-col gap-2">
                    <div className="w-full flex justify-between">
                        <h2 className="flex justify-center font-medium">Type</h2>
                        <p className="flex justify-center font-medium">Quantity</p>
                        <p className="flex justify-center font-medium">
                          Price
                        </p>
                      </div>
                      <div className="w-full flex justify-between">
                        <h2 className="flex justify-center">Adult</h2>
                        <p className="flex justify-center">{adultCount} x</p>
                        <p className="flex justify-center">
                          {travel.price.adultPrice.toLocaleString()}
                        </p>
                      </div>
                      <div className="w-full  flex justify-between">
                        <h2 className="flex justify-center">Child</h2>
                        <p className="flex justify-center">{childCount} x</p>
                        <p className="flex justify-center">
                          {travel.price.childPrice.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="w-full rounded-b-lg bg-gray-50 font-bold text-xl p-1 px-4 border border-gray-100 flex justify-between">
                      <h1>Total amount</h1>
                      <h1>
                        {(adultCount * travel.price.adultPrice +
                          childCount * travel.price.childPrice).toLocaleString()}
                      </h1>
                    </div>
                  </div>
                </div>
                <form onSubmit={formik.handleSubmit}  className="w-2/3 flex flex-col gap-6">
                  <div className="w-full flex flex-col ">
                    <h1 className="w-full rounded-t-lg bg-gray-50 font-bold text-xl p-1 px-4 border border-gray-100">
                      Tour Summary
                    </h1>
                    <div className="w-full border border-gray-100 rounded-b-lg p-4 flex  gap-5">
                      <div className=" w-1/4">
                        <img
                          src={travel.image.mainImage}
                          alt="travel tour image"
                          className="rounded-lg h-24"
                        />
                      </div>
                      <div className="w-3/5 flex flex-col gap-2 justify-center">
                        <h1 className="text-blue text-xl uppercase">
                          {travel.name}
                        </h1>
                        <div className="flex justify-start gap-2">
                          <LocationOnIcon />
                          <p className="capitalize">{travel?.destination.english} province</p>
                        </div>
                        <div className="flex gap-2 justify-start">
                          <Timeline/>
                          <span>{travel.duration}</span>
                          <span>days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col ">
                    <h1 className="w-full rounded-t-lg bg-gray-50 font-bold text-xl p-1 px-4 border border-gray-100">
                      Booking Summary
                    </h1>
                    <div className='w-full p-5 flex flex-col gap-10 justify-center items-start border border-gray-100 '>
                      {tourArray.map((data) => (
                          data.calendar.map((cal, index) => (
                              <div className='w-2/3 flex '>
                                  <div className='w-full bg-grayColor flex flex-col'>
                                      <div className='w-full bg-gray-200 p-1 px-5 grid grid-cols-3 rounded-t-lg '>
                                          <h1 className="flex justify-center">Select</h1>
                                          <h1 className="flex justify-center">Check-in</h1>
                                          <h1 className="flex justify-center">Check-out</h1>
                                      </div>
                                      <div className='w-full grid grid-cols-3 p-1 px-5 rounded-b-lg'>
                                        <div className="flex justify-center items-center">
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                onChange={() => handleCheckboxChange(index)}
                                                checked={checkedIndex === index}
                                            />
                                        </div>
                                          <h1 className="flex justify-center">{cal.startDay}</h1>
                                          <h1 className="flex justify-center">{cal.endDay}</h1>
                                      </div>
                                  </div>
                              </div>
                          ))
                      ))}
                       <div className='w-full flex gap-5 '>
                                    <div className='w-full bg-grayColor flex flex-col'>
                                        <div className='w-full bg-gray-200 px-5 p-1 grid grid-cols-3 rounded-t-lg '>
                                            <h1 className="flex justify-center">Adult</h1>
                                            <h1 className="flex justify-center">Child</h1>
                                            <h1 className="flex justify-center">Total</h1>

                                        </div>
                                        <div className='w-full grid grid-cols-3 px-5 p-2 rounded-b-lg'>
                                            <div className=" flex items-center justify-center">
                                              <button
                                                className={`rounded p-2 w-8 h-8 bg-blue text-white flex justify-center items-center`}
                                                onClick={handleAdultIncrement}
                                              >
                                                +
                                              </button>
                                              <input
                                                type="number"
                                                className="h-8 p-2 w-12 text-center rounded border bg-gray-50 border-gray-100"
                                                min={0}
                                                max={travel.maxTourist}
                                                value={adultCount}
                                                readOnly
                                              />
                                              <button
                                                className={`rounded p-2 w-8 h-8 bg-blue text-white flex justify-center items-center`}
                                                onClick={handleAdultDecrement}
                                              >
                                                -
                                              </button>
                                            </div>
                                            <div className=" flex items-center justify-center">
                                              <button
                                                className={`rounded p-2 w-8 h-8 bg-blue text-white flex justify-center items-center`}
                                                onClick={handleChildIncrement}
                                              >
                                                +
                                              </button>
                                              <input
                                                type="number"
                                                className="h-8 p-2 w-12 text-center rounded border bg-gray-50 border-gray-100"
                                                min={0}
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
                                            <div className="flex justify-center">{adultCount+childCount}</div>
                                        </div>
                                    </div>
                    </div>
                   </div>
                  </div>
                  <div className="w-full flex flex-col ">
                    <h1 className="w-full rounded-t-lg bg-gray-50 font-bold text-xl p-1 px-4 border border-gray-100">
                      Tourist Detail
                    </h1>
                    <div className="w-full border border-gray-100 rounded-b-lg p-4 grid grid-cols-2  gap-5" >
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="name">Last name</label>
                        <input
                          id="lastName"
                          type="lastName"
                          {...formik.getFieldProps("lastName")}
                          className="bg-grayColor rounded-lg p-3 w-full h-12"
                          placeholder="insert last name"
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                          <div className="text-red-400 text-xs">{formik.errors.lastName}</div>
                        ) : null}
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="name">First name</label>
                        <input
                          id="firstName"
                          type="firstName"
                          {...formik.getFieldProps("firstName")}
                          className="bg-grayColor rounded-lg p-3 w-full h-12"
                          placeholder="insert fisrt name"
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                          <div className="text-red-400 text-xs">{formik.errors.firstName}</div>
                        ) : null}
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="name">Email</label>
                        <input
                          id="email"
                          type="email"
                          {...formik.getFieldProps("email")}
                          className="bg-grayColor rounded-lg p-3 w-full h-12"
                          placeholder="insert email"
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-red-400 text-xs">{formik.errors.email}</div>
                        ) : null}
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="name">Phone number</label>
                        <input
                          id="phoneNumber"
                          type="lastName"
                          {...formik.getFieldProps("phoneNumber")}
                          className="bg-grayColor rounded-lg p-3 w-full h-12"
                          placeholder="insert phone number"
                        />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                          <div className="text-red-400 text-xs">{formik.errors.phoneNumber}</div>
                        ) : null}
                      </div>
                      

                    </div>
                  </div>
                  
                  <div className="w-full flex justify-end">
                    <button type="submit" className="p-2 px-5 w-1/3 bg-blue text-white rounded-lg">Buy travel</button>
                  </div>

                  <div className="w-full flex flex-col ">
                    <h1 className="w-full rounded-t-lg bg-gray-50 font-bold text-xl p-1 px-4 border border-gray-100">
                      Payment detail
                    </h1>
                    <div className="w-full border border-gray-100 rounded-b-lg p-4 flex flex-col gap-5" >
                      <div className="flex justify-between">
                        <span>{`status`}</span>
                        <Replay/>
                      </div>
                      <div className="w-full flex justify-center items-center">{`QR`}</div>
                    </div>
                  </div>
                </form>
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
