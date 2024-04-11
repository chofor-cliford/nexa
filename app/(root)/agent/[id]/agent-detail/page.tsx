"use client";

import Cards from "@/components/shared/Cards";
import PropertyDisplay from "@/components/shared/PropertyDisplay";
import { Button } from "@/components/ui/button";
import { agentStatuses } from "@/constants";
import { propertyDetails } from "@/public/assets";
import Image from "next/image";
import { useState } from "react";

const AgentDetails = () => {
  const [expand, setExpand] = useState(4);
  return (
    <div className="py-5 ml-5 flex flex-col gap-4 h-full w-[1145px] rounded-md">
      <h1 className="font-bold text-[25px] leading-[34.15px] text-[#11142D]">
        Agent Details
      </h1>
      <div className="flex gap-5 items-center h-[594px]">
        <div className="w-[322px] flex flex-col h-[594px] gap-0.5 bg-[#FCFCFC] shadow-md rounded-md">
          <Image
            src="/assets/profile_bg.png"
            width={322}
            height={140}
            alt="agent-background"
          />
          <div className="flex gap-5 items-center h-[100px] ">
            <div className="relative w-[100px] h-[100px]">
              <Image
                src="/assets/img1.png"
                width={100}
                height={100}
                alt="agent-profile"
                className="absolute left-4 -top-10 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[6px] items-start">
              <h3 className="text-[#11142D] flex font-semibold text-base">
                Hussain Ahmend
              </h3>
              <span className="font-normal text-[14px] leading-[22px] text-[#808191]">
                Agent
              </span>
            </div>
          </div>

          <div className="w-[288px] h-[281px] -mt-3">
            <div className="flex w-full h-full gap-5 px-5 pb-2">
              <div className="flex flex-col items-start justify-between h-full">
                <span className="text-[#808191] text-[14px] leading-[22px] font-normal">
                  Age:
                </span>
                <span className="text-[#808191] text-[14px] leading-[22px] font-normal">
                  City:
                </span>
                <span className="text-[#808191] text-[14px] leading-[22px] font-normal">
                  City:
                </span>
                <span className="text-[#808191] text-[14px] leading-[22px] font-normal">
                  Country:
                </span>
                <span className="text-[#808191] text-[14px] leading-[22px] font-normal">
                  Post Code:
                </span>
                <span className="text-[#808191] text-[14px] leading-[22px] font-normal">
                  Agent ID:
                </span>
                <span className="text-[#808191] text-[14px] leading-[22px] font-normal">
                  Phone ID:
                </span>
                <span className="text-[#808191] text-[14px] leading-[22px] font-normal">
                  Email:
                </span>
              </div>

              <div className="flex flex-col items-start justify-between h-full">
                <span className="text-[#11142D] font-medium text-[14px] leading-[22px]">
                  25
                </span>
                <span className="text-[#11142D] font-medium text-[14px] leading-[22px]">
                  New York City
                </span>
                <span className="text-[#11142D] font-medium text-[14px] leading-[22px]">
                  New York
                </span>
                <span className="text-[#11142D] font-medium text-[14px] leading-[22px]">
                  USA
                </span>
                <span className="text-[#11142D] font-medium text-[14px] leading-[22px]">
                  1001
                </span>
                <span className="text-[#11142D] font-medium text-[14px] leading-[22px]">
                  #18457 865 8745
                </span>
                <span className="text-[#11142D] font-medium text-[14px] leading-[22px]">
                  + 0215412364500
                </span>
                <span className="text-[#11142D] font-medium text-[14px] leading-[22px]">
                  hussain145@gmail.com
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center justify-center mt-2">
            <Image
              src="/assets/facebook.svg"
              alt="facebook"
              width={52}
              height={52}
              className="cursor-pointer"
            />
            <Image
              src="/assets/twitter.svg"
              alt="twitter"
              width={52}
              height={52}
              className="cursor-pointer"
            />
            <Image
              src="/assets/instagram.svg"
              alt="instagram"
              width={52}
              height={52}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="w-[793px] h-full bg-[#FCFCFC] rounded-md">
          <div className="p-5 flex gap-8 flex-col">
            <h2 className="font-semibold text-[18px] leading-[24.59px] text-[#11142D]">
              Agent Details
            </h2>
            <p className="font-medium text-[16px] leading-[21.86px] text-[#808191]">
              Talent customers tend to earn a basic salary in the range of
              £15,000 to £35,000 per annum. However, talented customers also
              earn a commission for finding their client's work. Typically,
              agents receive around 10% of what the client is paid.
            </p>

            <div className="w-[531px] h-[130px] flex justify-between">
              <div className="flex h-full items-start justify-between flex-col">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/tick.svg"
                    alt="tick"
                    width={20}
                    height={20}
                  />
                  <span className="font-medium text-[14px] leading-[22px] text-[#11142D]">
                    Agent
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/tick.svg"
                    alt="tick"
                    width={20}
                    height={20}
                  />
                  <span className="font-medium text-[14px] leading-[22px] text-[#11142D]">
                    Agent License
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/tick.svg"
                    alt="tick"
                    width={20}
                    height={20}
                  />
                  <span className="font-medium text-[14px] leading-[22px] text-[#11142D]">
                    Tax Number
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/tick.svg"
                    alt="tick"
                    width={20}
                    height={20}
                  />
                  <span className="font-medium text-[14px] leading-[22px] text-[#11142D]">
                    Service area
                  </span>
                </div>
              </div>

              <div className="flex h-full items-start justify-between flex-col">
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/dot.svg"
                    alt="dot"
                    width={6}
                    height={6}
                    className="filter-grey"
                  />
                  <span className="font-medium text-[14px] leading-[22px] text-[#808191]">
                    All American RealEstate
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/dot.svg"
                    alt="dot"
                    width={6}
                    height={6}
                    className="filter-grey"
                  />
                  <span className="font-medium text-[14px] leading-[22px] text-[#808191]">
                    3124 9764 9700 234
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/dot.svg"
                    alt="dot"
                    width={6}
                    height={6}
                    className="filter-grey"
                  />
                  <span className="font-medium text-[14px] leading-[22px] text-[#808191]">
                    TX 87D0 678H PQ45
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/dot.svg"
                    alt="dot"
                    width={6}
                    height={6}
                    className="filter-grey"
                  />
                  <span className="font-medium text-[14px] leading-[22px] text-[#808191]">
                    Chicago, Los Angeles, New York, Miami beach
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="font-semibold text-[18px] leading-[24.59px] text-[#11142D]">
                Agent Status
              </h2>

              <div className="flex justify-between items-center">
                {agentStatuses.map((status) => (
                  <Cards
                    key={status.title}
                    data={status.data}
                    amount={status.amount}
                    title={status.title}
                    isColumn
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1145px] h-fit bg-[#FCFCFC] shadow-md rounded-md">
        <div className="p-5 flex flex-col gap-2.5 w-full">
          <div className="flex justify-between w-full">
            <h4 className="font-semibold text-[18px] leading-[24.59px] text-[#11142D]">
              Active Listing
            </h4>
            {expand === -1 ? (
              <Button
                onClick={() => setExpand(4)}
                variant="outline"
              >
                Show Less
              </Button>
            ) : (
              <Button onClick={() => setExpand(-1)} variant="outline">
                View All
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 w-full h-full gap-10">
            {propertyDetails.slice(0, expand).map((property, i) => (
              <PropertyDisplay
                key={i}
                imageUrl={property.imageUrl}
                title={property.title}
                address={property.address}
                numberOfBedrooms={property.numberOfBedrooms}
                price={property.price}
                sale={property.sale}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
