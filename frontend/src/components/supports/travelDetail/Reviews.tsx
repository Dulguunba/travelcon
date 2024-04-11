import React, { useState } from "react";
import { LeftArrow, RightArrow } from "@/components/icons/travelDetail";
import ReviewCard from "./ReviewCard";
import { getServerSideProps } from '@/utils/fetchTravelDatas'
import { Tours } from "@/types/toursTypes";
import { Travel } from "@/types/travelTypes";
import { ReviewForm } from './ReviewForm';
import { useRouter } from "next/router";
import { Review } from "@/types/reviewTypes";

interface Props {
  reviewDatas?: Review
}

const Reviews = ({ reviewDatas }: Props) => {
  const router = useRouter();
  const { tour } = router.query;


  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index > 2) setIndex(index - 2);
  };
  const handlePrevMobile = () => {
    if (index > 1) setIndex(index - 1);
  };
  const handleNext = () => {
    if (reviewDatas && reviewDatas.result && index < reviewDatas.result.length - 2) setIndex(index + 2);
  };
  const handleNextMobile = () => {
    if (reviewDatas && reviewDatas.result && index < reviewDatas.result.length) setIndex(index + 1);
  };


  return (
    <div className="flex flex-col mt-20 mb-20">
      <div className="flex justify-between">
        <div className="lg:text-[40px] text-3xl font-oswald font-bold">
          REVIEWS
        </div>
        <div className="lg:flex hidden lg:gap-20">
          <button onClick={handlePrev}>
            {index > 0 ? <LeftArrow /> : <LeftArrow fill="#F6F6F6" />}
          </button>
          <button onClick={handleNext}>
            {reviewDatas && reviewDatas.result && index < reviewDatas.result.length - 2 ? (
              <RightArrow />
            ) : (
              <RightArrow fill="#F6F6F6" />
            )}
          </button>
        </div>
        <div className="lg:hidden flex gap-10">
          <button onClick={handlePrevMobile}>
            {index > 0 ? <LeftArrow /> : <LeftArrow fill="#F6F6F6" />}
          </button>
          <button onClick={handleNextMobile}>
            {reviewDatas && reviewDatas.result && index < reviewDatas.result.length - 1 ? (
              <RightArrow />
            ) : (
              <RightArrow fill="#F6F6F6" />
            )}
          </button>
        </div>
      </div>
      <div className="lg:mt-10 lg:flex hidden lg:flex-row flex-col justify-between">
        {reviewDatas && reviewDatas.result && reviewDatas.result.length > 0 ? (
          reviewDatas.result.map((review) =>
            review.travelId === tour ? (
              <ReviewCard
                message={review.comment}
                proPic="https://pixy.org/src/120/thumbs350/1206832.jpg"
                name={review.email}
              />
            ) : null
          )
        ) : (
          <p className="bg-black w-[300px] h-[300px]">No reviews yet</p>
        )}
      </div>
      <div className="mt-10 lg:hidden flex lg:flex-row flex-col justify-between">
        {reviewDatas?.result.map((review) =>
          review.travelId === tour ?
            (
              <ReviewCard
                message={review.comment}
                proPic="https://pixy.org/src/120/thumbs350/1206832.jpg"
                name={review.email}
              />
            )
            : null
        )
        }
      </div>
      <ReviewForm />
    </div>
  );
};

export { getServerSideProps };

export default Reviews;
