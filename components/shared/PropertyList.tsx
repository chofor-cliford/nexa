"use client";

import { initialValues, propertyList } from "@/constants";
import { useState } from "react";
import Card from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const PropertyList = ( {extratedValues}:any) => {
  const [value, setValue] = useState("popular");
  const [properties, setProperties] = useState(initialValues);

  return (
    <div className="h-[336px] w-full bg-secondary-origin rounded-md mt-5">
      <div className="p-5 flex flex-col justify-between h-full w-full">
        <div className="flex justify-between items-center text-center">
          <p className="font-semibold text-[18px] leading-[24.59px] text-[#11142D]">
            Property List
          </p>
          <div className="flex gap-10">
            {propertyList.map((property) => {
              const isActive: boolean =
                value === property.title.toLowerCase() &&
                property.title !== "Most Recent";

              return (
                <button
                  key={property.title}
                  className={`w-fit h-[36px] ${
                    isActive
                      ? "text-white bg-primary-BLUE font-semibold"
                      : "text-[#11142D] bg-[#F7F7F7]"
                  } rounded-md p-2.5 flex items-center cursor-pointer`}
                  onClick={() => setValue(property.title.toLowerCase())}
                  id="others"
                >
                  {property.title === "Most Recent" ? (
                    <select
                      name="others"
                      id="others"
                      className="outline-none border-none flex items-center bg-[#F7F7F7]"
                    >
                      {property.others?.map((other, i) => (
                        <option
                          value={other.toLowerCase()}
                          key={i}
                        >
                          {other}
                        </option>
                      ))}
                    </select>
                  ) : (
                    property.title
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="flex h-[245px] w-[1100px] items-center justify-center"
        >
          <CarouselContent className="flex h-full gap-6 w-full items-center justify-center">
            {extratedValues?.map((item: any, i: number) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <Card
                  country="UK"
                  title={item?.title}
                  price={item?.price}
                  address={item?.address}
                  imageUrl={item?.imageUrl}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default PropertyList;
