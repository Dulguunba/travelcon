import React, { useState } from "react";
import {
  Dollar,
  Minus,
  Plus,
  Left,
  LocationWhite,
  Right,
  Select,
} from "@/components/icons/destinationPage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FetchDataProps } from "@/types/fetchDataProps";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Travel, TravelObjectType } from "@/types/travelTypes";

export const FormComponent = () => {
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
      alert(JSON.stringify(values, null, 2));
      const orderData = {
        lastname: formik.values.lastName,
        firstName: formik.values.firstName,
        email: formik.values.email,
        phoneNumber: formik.values.phoneNumber,
      };
    },
  });
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

            <div className="md:flex justify-between pt-20 pb-[120px]">
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
