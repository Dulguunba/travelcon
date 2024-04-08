import React from "react";
import {
  Dollar,
  Left,
  LocationWhite,
  Right,
  Select,
} from "@/components/icons/destinationPage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FetchDataProps } from "@/types/fetchDataProps";

export const FormComponent = ({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      insurance: false,
      privacyAccept: false,
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
      insurance: Yup.boolean().oneOf(
        [true],
        "Insurance acceptance is required"
      ),
      privacyAccept: Yup.boolean().oneOf(
        [true],
        "Privacy policy acceptance is required"
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      const orderData = {
        lastname: formik.values.lastName,
        firstName: formik.values.firstName,
        email: formik.values.email,
        phoneNumber: formik.values.phoneNumber,
        insurance: formik.values.insurance,
        privacyAccept: formik.values.privacyAccept,
      };
    },
  });
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center bg-[url('/place.png')] bg-no-repeat bg-cover">
                <div className='flex max-w-[1520px] w-[90%] py-5 flex-col h-[600px] md:h-[950px]'>
                    <div className='flex items-center justify-center h-full flex-col'>
                        <p className='text-white'> Home    |   Destination</p>
                        <h1 className='font-oswald text-white font-bold  md:text-[200px] md:leading-[200px] text-[40px] leading-[50px]'>BOOKING FORM</h1>
                    </div>
                </div>
            </div> */}
      <div className="flex flex-col items-center justify-center bg-white pt-20">
        <div className="flex max-w-[1520px] w-[90%] flex-col ">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="pb-[60px] font-oswald font-bold text-[40px] leading-[50px]">
              PERSONAL IDENTITY
            </h1>
            <div className="md:flex gap-[30px]">
              <div className="w-full">
                <div className="flex pb-4">
                  <h2 className=""> FIRST NAME </h2>
                  <p className="text-blue">*</p>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="lg:pl-5">{formik.errors.firstName}</div>
                  ) : null}
                </div>
                <div className="flex gap-[30px] w-full">
                  <div className="max-w-[745px] w-full flex items-center rounded-[15px] bg-grayColor h-[100px]">
                    <input
                      id="firstName"
                      type="firstName"
                      {...formik.getFieldProps("firstName")}
                      className="bg-grayColor rounded-[15px] pl-12 w-full h-full"
                      placeholder="Amelia"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex pb-4">
                  <h2 className=""> LAST NAME </h2>
                  <p className="text-blue">*</p>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="lg:pl-[20px]">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>

                <div className="lg:max-w-[745px] w-full  flex items-center rounded-[15px] bg-grayColor h-[100px]">
                  {" "}
                  <input
                    id="lastName"
                    type="lastName"
                    {...formik.getFieldProps("lastName")}
                    className="bg-grayColor rounded-[15px] pl-12 w-full h-full"
                    placeholder="Watson"
                  />
                </div>
              </div>
            </div>

            <div className="md:flex gap-[30px] pt-12">
              <div className="w-full">
                <div className="flex pb-4">
                  <h2 className=""> EMAIL ADDRESS </h2>
                  <p className="text-blue">*</p>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="pl-5">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="lg:max-w-[745px] w-full  flex items-center rounded-[15px] bg-grayColor h-[100px]">
                  {" "}
                  <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                    className="bg-grayColor rounded-[15px] pl-12 w-full h-full"
                    placeholder="AmeliaWatson@gmail.com"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex pb-4">
                  <h2 className=""> PHONE NUMBER </h2>
                  <p className="text-blue">*</p>
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className="pl-5">{formik.errors.phoneNumber}</div>
                  ) : null}
                </div>
                <div className="lg:max-w-[745px] w-full  flex items-center rounded-[15px] bg-grayColor h-[100px]">
                  {" "}
                  <input
                    id="phoneNumber"
                    type="phoneNumber"
                    {...formik.getFieldProps("phoneNumber")}
                    className="bg-grayColor rounded-[15px] pl-12 w-full h-full"
                    placeholder="123 - 456 - 7890"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-20">
              <h1 className=" font-oswald font-bold text-[40px] leading-[50px] pb-12">
                PACKAGE
              </h1>
              <div className="flex gap-[64px]">
                <Left />
                <Right />
              </div>
            </div>
            {/* {travelDatas.result.map((item, index) => (
                            <div key={index} className='md:flex  rounded-xl  justify-between w-full gap-12'>
                                <img className='lg:w-[30%] w-[100%] h-[206px] rounded-3xl ' src={`${item?.image?.mainImage}`} alt="winter" />
                                <div className='lg:w-[40%] w-[100%]'>
                                    <div className='max-w-[659px]'>
                                        <h3 className='font-normal text-blue text-[20px] leading-[30px]'>{item.name}</h3>
                                        <p className='font-normal text-[20px] leading-[30px] flex-wrap  text-[#222222] overflow-hidden overflow-y-auto h-20'>{item.additionalInfo}</p>
                                        <button className='border border-gray-400 px-8 py-4 rounded-xl text-red-600 font-semibold '>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))} */}
            <div>
              <img
                src="./sakura.png"
                alt=""
                className="absolute -z-1 rounded-3xl h-[562px] flex flex-col  justify-between"
              />
              <div className="relative rounded-3xl h-[562px] flex flex-col pl-9 justify-between">
                <div className="w-[56px] h-[56px] rounded-full border-white border-2 flex items-center justify-center bg-blue mt-8">
                  <Select />
                </div>
                <div className="pb-[64px]">
                  <h1 className="font-oswald font-bold md:text-[100px] md:leading-[100px] text-[40px] leading-[50px] text-white">
                    DISCOVER JAPAN TOUR PACKAGE
                  </h1>
                  <div className="flex items-center pt-10">
                    <LocationWhite />
                    <p className="font-normal text-[20px] text-white leading-[30px] pl-4 pr-6">
                      {" "}
                      Tokyo & Kyoto , Japan{" "}
                    </p>
                    <p className="font-normal text-[20px] text-white leading-[30px] pr-4 ">
                      |
                    </p>
                    <Dollar />
                    <p className="font-normal text-[20px] text-white leading-[30px] pl-4 pr-6">
                      Start from $ 3,500
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex justify-between pt-20 pb-[120px]">
              <div>
                <div className="flex gap-4 items-center">
                  <input
                    id="insurance"
                    type="checkbox"
                    checked={formik.values.insurance}
                    {...formik.getFieldProps("insurance")}
                    className="checkbox"
                  />
                  <p>
                    Get me a travel insurance that covers my whole trip safety
                    and cancellation.
                  </p>
                </div>
                {formik.touched.insurance && formik.errors.insurance ? (
                  <div className="pl-5">{formik.errors.insurance}</div>
                ) : null}
                <div className="flex gap-4 items-center py-4">
                  <input
                    id="privacyAccept"
                    type="checkbox"
                    checked={formik.values.privacyAccept}
                    {...formik.getFieldProps("privacyAccept")}
                    className="checkbox"
                  />
                  <p>I have read all terms & condition and privacy policy.</p>
                </div>
                {formik.touched.privacyAccept && formik.errors.privacyAccept ? (
                  <div className="pl-5">{formik.errors.privacyAccept}</div>
                ) : null}
              </div>
              <button
                type="submit"
                className="md:py-[30px] md:px-[100px] py-[15px] px-12 bg-blue text-white rounded-xl"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
