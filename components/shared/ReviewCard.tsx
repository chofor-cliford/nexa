import Image, { StaticImageData } from "next/image";
import React from "react";

type ReviewCardProps = {
  imageUrl: string | StaticImageData;
  color: string;
  name: string;
  date: string;
  time: string;
  description: string;
  serviceTypes: string[];
  numberOfStars: string[];
};

const ReviewCard = ({
  imageUrl,
  color,
  name,
  date,
  time,
  description,
  serviceTypes,
  numberOfStars,
}: ReviewCardProps) => {
  const badServices = ["BAD SERVICE", "UNEXPECTED"];

  return (
    <div className="flex w-[1095px] h-[166px] items-center gap-[30px]">
      <div className="flex w-[253px] h-[98px] gap-[15px]">
        <div className="w-[70px] h-[70px]">
          <Image src={imageUrl} alt="profile" className="object-cover" />
        </div>
        <div className="w-[168px] h-[98px] gap-[5px] flex flex-col">
          <div className="h-[47px] gap-[3px] w-full flex flex-col">
            <span className="text-primary-BLUE font-normal text-sm">
              {color}
            </span>
            <span className="text-[#11142D] font-medium text-base">{name}</span>
          </div>
          <div className="h-[46px] w-full gap-[2px] flex flex-col">
            <span className="font-normal text-sm text-[#808191]">{date}</span>
            <span className="font-normal text-sm text-[#808191]">{time}</span>
          </div>
        </div>
      </div>

      <div className="w-[812px] h-[111px] justify-between flex">
        <div className="w-[573px] h-[66px] flex flex-col gap-[15px]">
          <p className="font-normal text-[14px] leading-[22px] text-[#808191]">{description}</p>
          <div className="flex gap-2.5 items-start h-[30px]">
            {serviceTypes?.map((type) => {
              const isBadService = badServices.includes(type);

              return (
                <p
                  key={type}
                  className={`bg-[#FCFCFC] rounded-[15px] px-[10px] py-[7px] border ${
                    isBadService ? "border-[#EB5757]" : "border-primary-BLUE"
                  } flex items-center w-fit cursor-pointer`}
                >
                  <span
                    className={`${
                      isBadService ? "text-[#EB5757]" : "text-primary-BLUE"
                    } font-semibold text-xs`}
                  >
                    {type}
                  </span>
                </p>
              );
            })}
          </div>
        </div>

        <div className="w-[165px] h-[80px] flex flex-col gap-[14px]">
          <div className="h-[30px] gap-[6px] flex items-center">
            <span className="font-semibold text-2xl text-[#11142D]">
              {numberOfStars?.length.toPrecision(2)}
            </span>
            <div className="w-[120px] h-[24px] flex justify-between">
              {numberOfStars?.map((star, i) => (
                <Image
                  key={i}
                  src={star}
                  width={24}
                  height={24}
                  alt="star"
                  className="object-cover"
                />
              ))}
            </div>
          </div>

          <div className="w-[159px] h-[36px] gap-2.5 items-center flex">
            <div className="border h-[36px] w-[69px] rounded-[18px] px-4 py-[10px] border-[#EB5757] bg-[#FCFCFC] flex items-center cursor-pointer">
              <span className="text-[#EB5757] text-sm font-normal">Reject</span>
            </div>
            <div className=" h-[36px] w-[80px] rounded-[18px] px-4 py-[10px] bg-[#2ED480] flex items-center cursor-pointer">
              <span className="text-[#FCFCFC] text-sm font-semibold">
                Approve
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
