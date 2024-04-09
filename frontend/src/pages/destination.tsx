import Image from "next/image";
import { Inter } from "next/font/google";
import { getServerSideProps } from "../utils/fetchTravelDatas";
import React from "react";
import { Cart } from "@/components/supports/destinationPage/Cart";
import { Props } from "@/types/fetchDataProps";
import { Hero } from "@/components/supports/destinationPage/Hero";
import { TravelBlog } from "@/components/supports/destinationPage/TravelBlog";
import Header from "@/components/supports/homePage/Header";
import { FormComponent } from "@/components/supports/destinationPage/FormComponent";

const inter = Inter({ subsets: ["latin"] });



function Destination({ travelDatas, toursData, destinationDatas, categoryDatas }: Props) {
  return (
    <>
      {/* <Cart toursData={toursData} travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} /> */}
      {/* <Order /> */}
      <Hero toursData={toursData} travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} />
      {/* <FormComponent toursData={toursData} travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} /> */}
      {/* <TravelBlog /> */}
    </>
  );
};

export { getServerSideProps };

export default Destination;