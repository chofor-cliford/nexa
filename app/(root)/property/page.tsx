import PropertyDisplay from "@/components/shared/PropertyDisplay";
import {
  realEstateCountriesAndStates,
  realEstateStatus,
  realEstateType,
} from "@/constants";
import { propertyDetails, search } from "@/public/assets";
import Image from "next/image";
import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import PaginationComponent from "@/components/shared/PaginationComponent";

const Property = () => {
  return (
    <div className="py-5 ml-5 flex flex-col gap-10 h-full w-[1145px]">
      <PageHeader href="/property/2/property-add/" title="Property" />

      <div className="bg-[#FCFCFC] h-[899px] rounded-[15px]">
        <div className="p-5 flex flex-col gap-5">
          <div className="flex w-full gap-2.5">
            <div className=" flex items-center bg-[#F7F7F7] gap-[5px] rounded-sm p-2.5 h-[38px] w-[299px] cursor-pointer">
              <Image src={search} alt="search" width={18} height={18} />
              <input
                autoFocus
                className="text-sm text-[#808191] bg-transparent outline-none h-[18px] w-[229px] font-medium"
                placeholder="Enter an address, city or Zip code"
              />
            </div>

            <select
              name="status"
              id="status"
              className="w-[160px] h-[38px] rounded bg-[#F7F7F7] p-2.5 text-[#808191] text-sm hover:border-gray-500 cursor-pointer"
            >
              {realEstateStatus.map((status, i) => (
                <option key={`${status} + ${i}`} value={status} className="">
                  {status}
                </option>
              ))}
            </select>

            <select
              name="type"
              id="type"
              className="w-[160px] h-[38px] rounded bg-[#F7F7F7] p-2.5 text-[#808191] text-sm hover:border-gray-500 cursor-pointer"
            >
              {realEstateType.map((type, i) => (
                <option key={`${type} + ${i}`} value={type} className="">
                  {type}
                </option>
              ))}
            </select>

            <select
              name="country"
              id="country"
              className="w-[160px] h-[38px] rounded bg-[#F7F7F7] p-2.5 text-[#808191] text-sm hover:border-gray-500 cursor-pointer"
            >
              {realEstateCountriesAndStates.map((item, i) => (
                <option key={`${item.country} + ${i}`} value={item.country}>
                  {item.country}
                </option>
              ))}
            </select>

            <select
              name="states"
              id="states"
              className="w-[160px] h-[38px] rounded bg-[#F7F7F7] outline-none p-2.5 text-[#808191] text-sm hover:border-gray-500 cursor-pointer"
            >
              {realEstateCountriesAndStates.map((item, i) => (
                <React.Fragment key={i}>
                  {item.states.map((state) => (
                    <option key={`${state} + ${i}`} value={state}>
                      {state}
                    </option>
                  ))}
                </React.Fragment>
              ))}
            </select>

            <div className="flex items-center justify-center w-[77px] h-[38px] rounded bg-[#F7F7F7] gap-2.5 cursor-pointer">
              <Image src="/assets/more.svg" alt="more" width={22} height={22} />
              <span className="text-sm text-[#808191] font-medium">More</span>
            </div>
          </div>

          <div className="grid grid-cols-2 w-full h-full gap-10">
            {propertyDetails.map((property, i) => (
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

      <PaginationComponent title="property" />
    </div>
  );
};

export default Property;
