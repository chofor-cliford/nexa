import AdditionalProperty from "@/components/shared/AdditionalProperty";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  realEstateCountriesAndStates,
  realEstateStatus,
  realEstateType,
} from "@/constants";
import { extraProperties, search } from "@/public/assets";
import Image from "next/image";
import React from "react";

const PageMapDetails = () => {
  return (
    <div className="w-full h-full flex py-5 pl-5">
      <div className="w-[1144px] h-[695px] bg-[#FCFCFC] rounded-[15px] flex flex-col justify-between">
        <div className="flex flex-col p-5 justify-between w-full h-full items-center">
          <div className="flex gap-2.5">
            <div className="flex items-center bg-[#F7F7F7] w-[275px] h-[38px] rounded-md p-2.5">
              <Image
                src={search}
                alt="search"
                width={18}
                height={18}
                className="cursor-pointer"
              />
              <Input
                type="text"
                placeholder="Enter an address, city or Zip code"
                className="bg-[#F7F7F7] border-none outline-none text-sm focus:ring-transparent focus-visible:ring-transparent focus-visible:ring-offset-transparent ring-0 placeholder:text-[#11142D]"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[93px] h-[38px] bg-[#F7F7F7]">
                <SelectValue placeholder="For sale" className="text-sm" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {realEstateStatus.map((status, i) => (
                    <SelectItem key={i} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[119px] h-[38px] bg-[#F7F7F7]">
                <SelectValue placeholder="Type House" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {realEstateType.map((type, i) => (
                    <SelectItem key={i} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[143px] h-[38px] bg-[#F7F7F7]">
                <SelectValue placeholder="Min Price 500K" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {realEstateCountriesAndStates.map((item, i) => (
                    <SelectItem key={i} value={item.country}>
                      {item.country}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[145px] h-[38px] bg-[#F7F7F7]">
                <SelectValue placeholder="Max Price 700K" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {realEstateCountriesAndStates.map((item, i) => (
                    <React.Fragment key={i}>
                      {item.states.map((state) => (
                        <SelectItem key={`${state} + ${i}`} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </React.Fragment>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[149px] h-[38px] bg-[#F7F7F7]">
                <SelectValue placeholder="Floor area: 60m" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {realEstateCountriesAndStates.map((item, i) => (
                    <React.Fragment key={i}>
                      {item.states.map((state) => (
                        <SelectItem key={`${state} + ${i}`} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </React.Fragment>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex items-center justify-center w-fit px-4 py-2 h-[38px] rounded bg-[#F7F7F7] gap-2.5 cursor-pointer border border-[#dddeec]">
              <Image src="/assets/more.svg" alt="more" width={22} height={22} />
              <span className="text-sm text-[#11142D] font-medium">More</span>
            </div>
          </div>

          <div className="flex w-full h-[568px] gap-5">
            <div className="flex w-full h-full gap-2.5 flex-col items-center">
              <div className="w-full h-[519px] grid grid-cols-2 gap-5">
                {extraProperties.map((property, i) => (
                  <AdditionalProperty
                    key={i}
                    imageUrl={property.imageUrl}
                    location={property.location}
                    numberOfBathrooms={property.numberOfBathrooms}
                    numberOfBedrooms={property.numberOfBedrooms}
                    price={property.price}
                    sale={property.sale}
                  />
                ))}
              </div>
              <Button className="bg-primary-BLUE hover:bg-blue-600 hover:text-white/80 rounded-md items-center flex h-[38px] w-[93px]">
                <span className="text-[10px] leading-[14px] font-bold text-white hover:text-white/80">
                  ... 15 More
                </span>
              </Button>
            </div>
            <a
              href="https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62"
              className="w-full h-full flex"
            >
              <Image
                src="/assets/map1.png"
                alt="Map Location"
                width={541}
                height={568}
                className="object-cover cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageMapDetails;
