import Image from "next/image";
import { Inter } from "next/font/google";
import { getServerSideProps } from "../utils/fetchTravelDatas";
import React from "react";
import { Cart } from "@/components/supports/destinationPage/Cart";
import { FetchDataProps } from "@/types/fetchDataProps";
import Top from "@/components/supports/destinationPage/Top";
const inter = Inter({ subsets: ["latin"] });
import { MainTours } from "@/components/supports/destinationPage/MainTours";
import { Footer } from "@/components/supports/destinationPage/Footer";

function Tour({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) {
  return (
    <>
      <Top
        travelDatas={travelDatas}
        destinationDatas={destinationDatas}
        categoryDatas={categoryDatas}
        toursData={toursData}
      />
      <MainTours />
      {/* <Hero         travelDatas={travelDatas}
        destinationDatas={destinationDatas}
        categoryDatas={categoryDatas}
        toursData={toursData}/> */}
      <Footer />
    </>
  );
}

export { getServerSideProps };

export default Tour;
