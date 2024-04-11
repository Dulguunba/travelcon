import TourDetailHero from "@/components/supports/travelDetail/TourDetailHero";
import React from "react";
import { getServerSideProps } from "@/utils/fetchTravelDatas";
// import { Footer } from '@/components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FetchDataProps } from "@/types/fetchDataProps";


const TourDetail = ({
  toursData,
  travelDatas,
  destinationDatas,
  categoryDatas,
  reviewDatas,
}: FetchDataProps) => {

  return (
    <div>
      <TourDetailHero
        reviewDatas={reviewDatas}
        destinationDatas={destinationDatas}
        categoryDatas={categoryDatas}
        travelDatas={travelDatas}
        toursData={toursData}
      />
      {/* <Footer /> */}
    </div>
  );
};

export { getServerSideProps };

export default TourDetail;