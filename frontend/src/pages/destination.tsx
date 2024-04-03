import Image from "next/image";
import { Inter } from "next/font/google";
import { GetServerSideProps } from "next";
import { getServerSideProps } from "../utils/fetchTravelDatas";
import { Travel } from "../types/travelTypes";
import { Tours } from "../types/toursTypes";
import { Destination } from "../types/destinationTypes";
import { DestinationCategory } from "../types/destinationCategoryTypes";
import React from "react";
import { Hero } from "@/components/supports/destinationPage/Hero";
import { Order } from "@/components/supports/destinationPage/Order";
import { FormComponent } from "@/components/supports/destinationPage/FormData";
import { Footer } from "@/components/supports/destinationPage/Footer";

const inter = Inter({ subsets: ["latin"] });

export interface Props {
  travelDatas: Travel
  toursData: Tours
  destinationDatas: Destination
  categoryDatas: DestinationCategory
}

function Destination({ travelDatas, toursData, destinationDatas, categoryDatas }: Props) {
  return (
    <>

      {/* <Order /> */}
      <Hero toursData={toursData} travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} />
      {/* <FormComponent /> */}
      <Footer />
    </>
  );
};

export { getServerSideProps };

export default Destination;