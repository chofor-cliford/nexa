"use client";

import PaginationComponent from "@/components/shared/PaginationComponent";
import ReviewCard from "@/components/shared/ReviewCard";
import { reviewLists } from "@/constants";
import { reviewCardLists } from "@/public/assets";
import { useState } from "react";

const Review = () => {
  const [currentReview, setCurrentReview] = useState(reviewLists[0]);

  return (
    <div className="w-[1145px] h-[1102px] gap-5">
      <div className="p-5 flex flex-col gap-5 w-full h-full items-start">
        <h2 className="font-bold text-2xl text-[#11142D]">Review List</h2>

        <div className="w-[388px] h-[56px] bg-[#FCFCFC] rounded-[15px]">
          <div className="flex gap-6 pt-2 px-2 items-center h-[48px] justify-center">
            {reviewLists.map((review) => (
              <div
                key={review}
                className={`${
                  review === currentReview
                    ? "text-primary-BLUE border-b-2 border-b-primary-BLUE "
                    : ""
                } cursor-pointer h-full`}
                onClick={() => setCurrentReview(review)}
              >
                <span
                  className={`${
                    review === currentReview
                      ? "text-primary-BLUE"
                      : "text-[#808191]"
                  }  font-semibold text-base`}
                >
                  {review}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[972px] w-[1145px] gap-5 rounded-md bg-[#FCFCFC]">
          <div className="p-[30px] w-full h-full flex flex-col gap-2.5">
            {reviewCardLists?.map((review) => (
              <ReviewCard
                key={review.name}
                color={review.color}
                date={review.date}
                description={review.description}
                imageUrl={review.imageUrl}
                name={review.name}
                numberOfStars={review.numberOfStars}
                serviceTypes={review.serviceType}
                time={review.time}
              />
            ))}
          </div>
        </div>

        <PaginationComponent title="Review" />
      </div>
    </div>
  );
};

export default Review;
