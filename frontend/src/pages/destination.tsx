import Image from "next/image";
import { Inter } from "next/font/google";
import { getServerSideProps } from "../utils/fetchTravelDatas";
import React from "react";
import { Cart } from "@/components/supports/destinationPage/Cart";
import { FetchDataProps } from "@/types/fetchDataProps";
import { Hero } from "@/components/supports/destinationPage/Hero";
import { TravelBlog } from "@/components/supports/destinationPage/TravelBlog";
import Header from "@/components/supports/homePage/Header";
import AboutPageHero from "@/components/supports/aboutPage/AboutPageHero";
import { Footer } from "@/components/supports/destinationPage/Footer";
import { TravelGuide } from "@/components/supports/destinationPage/TravelGuide";
import { Highlight } from "@mui/icons-material";
import { Highlights } from "@/components/supports/destinationPage/Highlights";
import { BestTime } from "@/components/supports/destinationPage/BestTime";
const inter = Inter({ subsets: ["latin"] });

function Destination({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) {
  return (
    <>
      {/* <Header toursData={toursData} travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} /> */}
      {/* <Cart toursData={toursData} travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} /> */}
      {/* <Order /> */}
      <Hero toursData={toursData} travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} />
      {/* <FormComponent /> */}
      {/* <TravelBlog /> */}
      {/* <TravelGuide /> */}
      {/* <Highlights /> */}
      {/* <BestTime /> */}
      <Footer />
    </>
  );
}

export { getServerSideProps };

export default Destination;
