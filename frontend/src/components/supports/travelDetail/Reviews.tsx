import React, { useState } from "react";
import { LeftArrow, RightArrow } from "@/components/icons/travelDetail";
import ReviewCard from "./ReviewCard";
import { getServerSideProps } from '@/utils/fetchTravelDatas'
import { ReviewForm } from './ReviewForm';
import { useRouter } from "next/router";
import { Review } from "@/types/reviewTypes";

interface Props {
  reviewDatas?: Review
}

const Reviews = ({ reviewDatas }: Props) => {
  const router = useRouter();
  const { tour } = router.query;

  const filteredReviewData = reviewDatas?.result.filter(review => review.travelId === tour)

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 2);
  };
  const handlePrevMobile = () => {
    if (index > 0) setIndex(index - 1);
  };
  const handleNext = () => {
    if (filteredReviewData && index < filteredReviewData.length - 2) setIndex(index + 2);
  };
  const handleNextMobile = () => {
    if (filteredReviewData && index < filteredReviewData.length - -1) setIndex(index + 1);
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
            {filteredReviewData && index < filteredReviewData.length - 1 ? (
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
            {filteredReviewData && index < filteredReviewData.length - 1 ? (
              <RightArrow />
            ) : (
              <RightArrow fill="#F6F6F6" />
            )}
          </button>
        </div>
      </div>
      <div className="lg:mt-10 lg:flex hidden lg:flex-row flex-col justify-between">
        {filteredReviewData && filteredReviewData.length > 0 ? (
          filteredReviewData.slice(index, index + 2).map((review) =>
            <ReviewCard
              message={review.comment}
              proPic="https://pixy.org/src/120/thumbs350/1206832.jpg"
              name={review.email}
            />
          )
        ) : (

          <p className='lg:text-[20px] font-normal'>There are no reviews</p>

        )}
      </div>
      <div className="mt-10 lg:hidden flex lg:flex-row flex-col justify-between">
        {filteredReviewData && filteredReviewData.length > 0 ? (
          filteredReviewData.slice(index, index + 1).map((review) =>
            <ReviewCard
              message={review.comment}
              proPic="https://pixy.org/src/120/thumbs350/1206832.jpg"
              name={review.email}
            />

          )
        ) : null
        }
      </div>
      <ReviewForm />
    </div>
  );
};

export { getServerSideProps };

export default Reviews;
