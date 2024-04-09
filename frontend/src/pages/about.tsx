import Image from "next/image";
import { Inter } from "next/font/google";
import { Props } from ".";
import { getServerSideProps } from '@/utils/fetchTravelDatas'
import AboutPageHero from "@/components/supports/aboutPage/AboutPageHero";

const inter = Inter({ subsets: ["latin"] });


function About({ travelDatas, toursData, destinationDatas, categoryDatas }: Props) {
  return (
    <div>
      <AboutPageHero travelDatas={travelDatas} toursData={toursData} destinationDatas={destinationDatas} categoryDatas={categoryDatas} />
    </div>
  );
}

export { getServerSideProps };

export default About;