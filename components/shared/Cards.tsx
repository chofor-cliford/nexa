"use client";

import { Doughnut } from "react-chartjs-2";

type CardsProps = {
  title: string;
  amount: number;
  data: any;
  isColumn?: boolean;
};
import "chart.js/auto";

const Cards = ({ title, amount, data, isColumn }: CardsProps) => {
  return (
    <div
      className={`${
        isColumn ? "w-[217px] h-[180px] shadow-xl" : "h-[108px] w-[266.25px] shadow-sm"
      } rounded-[15px] bg-[#FCFCFC] `}
    >
      <div
        className={`p-5 w-full flex items-center justify-center ${
          isColumn && "flex-col"
        }`}
      >
        <div
          className={`${
            isColumn && "items-center"
          } flex gap-[5px] flex-col w-[157px] h-[63px]`}
        >
          <span
            className={`${
              isColumn
                ? "text-secondary-brown font-medium text-[16px] leading-[24px]"
                : "text-secondary-brown font-medium text-[14px] leading-[19.12px]"
            }`}
          >
            {title}
          </span>
          <h3
            className={`${
              isColumn
                ? "text-[25px] leading-[34.15px] text-[#11142D] font-bold"
                : "text-[24px] leading-[32.78px] text-[#11142D] font-bold"
            }`}
          >
            {amount}
          </h3>
        </div>
        <div
          className={`${isColumn ? "h-[82px] w-[82px]" : "h-[60px] w-[60px]"}`}
        >
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
