"use client";

import {  propertyReferral } from "@/constants";
import { motion } from "framer-motion";

const PropertyReferrals = () => {
  return (
    <div className="w-[390px] h-[363px] bg-[#FCFCFC] shadow-sm rounded-md">
      <div className=" p-5 flex-col flex gap-2.5 items-center w-full h-full">
        <h3 className="font-semibold text-[18px] leading-[24.59px]">
          Properties Referrals
        </h3>
        {propertyReferral.map((referral) => (
          <div className="flex flex-col w-full h-full" key={referral.title}>
            <p className="flex justify-between">
              <span className="text-[16px] leading-[21.86px] font-bold">
                {referral.title}
              </span>
              <span className="text-[16px] leading-[21.86px] font-bold">
                {referral.percentage}%
              </span>
            </p>
            <div className="w-[350px] h-2 rounded-full bg-background cursor-pointer">
              <motion.div
                className="w-full h-full rounded-full"
                style={{
                  backgroundColor: `${referral.color}`,
                  width: "0%", // Initial width set to 0%
                }}
                animate={{ width: `${referral.percentage}%` }} // Animating the width to referral.percentage
                initial={{ width: "0%" }} // Initial width set to 0%
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyReferrals;
