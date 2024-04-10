import Image from "next/image";
import { Inter } from "next/font/google";
import { FetchDataProps } from "@/types/fetchDataProps";
import { getServerSideProps } from "@/utils/fetchTravelDatas";
import AboutPageHero from "@/components/supports/aboutPage/AboutPageHero";
import { useEffect, useState } from "react";
import { Loading } from "@/components/supports/Loading";

const inter = Inter({ subsets: ["latin"] });

function About({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (travelDatas && toursData && destinationDatas && categoryDatas) {

      setIsLoading(false);

    }
  }, [travelDatas, toursData, destinationDatas, categoryDatas]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <AboutPageHero
        travelDatas={travelDatas}
        toursData={toursData}
        destinationDatas={destinationDatas}
        categoryDatas={categoryDatas}
      />
    </div>
  );
}

export { getServerSideProps };

export default About;
