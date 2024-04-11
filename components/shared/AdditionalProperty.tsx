import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

type AdditionalPropertyProps = {
  imageUrl: string | StaticImageData;
  price: string | number;
  location: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  sale: number;
};

const AdditionalProperty = ({
  imageUrl,
  price,
  location,
  numberOfBathrooms,
  numberOfBedrooms,
  sale,
}: AdditionalPropertyProps) => {
  return (
    <div className="w-[244px] h-[247px] cursor-pointer">
      <div className="w-full h-full flex flex-col gap-[7px] items-center">
        <div className="w-[244px] h-[117px] flex">
          <Image
            src={imageUrl}
            alt="House Image"
            width={244}
            height={117}
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-between w-[224px] h-[105px] items-start bg-[#FCFCFC] rounded-[6px]">
          <div className="flex w-full justify-between">
            <span className="font-semibold text-[18px] leading-[24.59px] text-[#11142D]">
              ${price}
            </span>
            <Button className="bg-primary-BLUE rounded-md w-[53px] h-[24px] hover:bg-blue-600 py-[5px] px-[7px] font-bold text-[10px] leading-[14px] text-white">
              For Sale
            </Button>
          </div>
          <p className="font-normal text-[12px] leading-[18px] text-[#808191] text-wrap">
            {location}
          </p>
          <div className="w-full h-[32px] flex justify-between">
            <div className="w-[56px] h-[32px] rounded-[7px] flex bg-[#F4F4F4] justify-center items-center gap-2.5">
              <Image src="/assets/car.svg" alt="bed" width={24} height={24} />
              <span className="font-medium text-[11px] leading-[16px] text-[#11142D]">
                {numberOfBedrooms}
              </span>
            </div>
            <div className="w-[56px] h-[32px] rounded-[7px] flex bg-[#F4F4F4] justify-center items-center gap-2.5">
              <Image src="/assets/bath.svg" alt="bath" width={24} height={24} />
              <span className="font-medium text-[11px] leading-[16px] text-[#11142D]">
                {numberOfBathrooms}
              </span>
            </div>
            <div className="w-fit p-2 h-[32px] rounded-[7px] flex justify-center bg-[#F4F4F4] items-center gap-2.5">
              <Image
                src="/assets/cross.svg"
                alt="selling price"
                width={24}
                height={24}
              />
              <span className="font-medium text-[11px] leading-[16px] text-[#11142D]">
                {sale}M
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalProperty;
