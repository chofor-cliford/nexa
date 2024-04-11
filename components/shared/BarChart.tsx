"use client";

import { menu } from "@/public/assets";
import Image from "next/image";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const labels = months.slice(0, 7).map((str) => str.slice(0, 3));
  const data = {
    labels: labels,
    datasets: [
      {
        label: "$21,74000",
        data: [800, 600, 600, 400, 800, 800, 400],
        backgroundColor: "#475BE8", // First color
      },
      {
        label: "$15,9800",
        data: [400, 300, 300, 200, 600, 600, 200],
        backgroundColor: "#CFC8FF", // Second color
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: "linear", // Specify the type explicitly
        beginAtZero: true,
        grid: {
          display: false, // Turn off grid lines for y-axis
        },
        ticks: {
          // Customizing y-axis labels
          callback: function (
            value: number,
            index: number,
            values: number[]
          ): string {
            return value + "k";
          },
          stepSize: 200, // Set the step size to 200
          min: 200, // Start the axis from 200
          max: 800,
        },
      },
      x: {
        type: "category", // Specify the type explicitly
        grid: {
          display: false, // Turn off grid lines for x-axis
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          // Using circle shapes for legend labels
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className="w-[730px] h-[363px] bg-[#FCFCFC] rounded-md">
      <div className="flex p-4 w-full h-full flex-col justify-between">
        <div className="flex justify-between items-center ">
          <p className="text-[18px] leading-[24.59px] font-semibold text-black">
            Total Revenue
          </p>
          <div className="flex gap-5 text-center items-center">
            <p className="flex gap-2">
              <span className="w-[13px] h-[13px] bg-primary-BLUE rounded-full" />
              <span className="text-[12px] leading-[16.39px] font-semibold text-gray-600">
                Last Month
              </span>
            </p>
            <p className="flex gap-2">
              <span className="w-[13px] h-[13px] bg-secondary-lightblue rounded-full" />
              <span className="text-[12px] leading-[16.39px] font-semibold text-gray-600">
                Runing Month
              </span>
            </p>
            <Image src={menu} alt="menu" className="cursor-pointer" />
          </div>
        </div>

        <div className="w-[288px] h-[38px] flex justify-between">
          <h2 className="text-[28px] font-bold leading-[38.25px]">$236,535</h2>
          <div className="flex items-center gap-2">
            <Image src="/assets/arrow.svg" alt="arrow" width={22} height={22} />
            <p className="flex flex-col">
              <span className="text-primary">0.8%</span>
              <span className="text-gray-400">Than last month</span>
            </p>
          </div>
        </div>

        <div style={{ width: "600px", height: "230px" }}>
          <Bar
            data={data}
            options={{
              ...options,
              scales: {
                ...options.scales,
                y: {
                  ...options.scales.y,
                  type: "linear",
                  ticks: {
                    ...options.scales.y.ticks,
                    callback: (value: string | number) => String(value + "k"),
                  },
                  grid: {
                    display: false, // Hide the grid lines for y-axis
                  },
                },
                x: {
                  ...options.scales.x,
                  type: "category",
                  grid: { display: false },
                },
              },
              plugins: {
                legend: {
                  labels: {
                    usePointStyle: true,
                  },
                },
              },
              elements: {
                bar: {
                  borderRadius: 3,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
