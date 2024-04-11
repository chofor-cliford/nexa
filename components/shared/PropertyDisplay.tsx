import { PropertDisplayProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PropertyDisplay = ({
  imageUrl,
  price,
  address,
  title,
  numberOfBedrooms,
  sale,
}: PropertDisplayProps) => {
  return (
    <Link href={`/property/2`} className="flex w-[500px] h-[125px] justify-between items-center cursor-pointer">
      <div className="w-[201px] h-[125px] rounded-xl">
        <Image src={imageUrl} alt={title} className="object-contain" />
      </div>

      <div className="h-[125px] w-[289px] gap-[13px] flex flex-col">
        <span className="bg-[#DADEFA] w-fit h-[30px] rounded px-[10px] py-[7px] items-center flex text-primary-BLUE">
          {price}
        </span>

        <div className="flex flex-col gap-[6px] items-start">
          <h3 className="text-[#11142D] text-base font-semibold">{title}</h3>

          <div className="flex gap-[5px] items-center w-[289px] h-[22px]">
            <Image
              src="/assets/location2.svg"
              alt="address"
              className="cursor-pointer object-cover"
              width={18}
              height={18}
            />
            <span className="text-[#808191] capitalize">{address}</span>
          </div>
        </div>

        <div className="flex gap-2.5 w-[184px] h-[18px] items-center">
          <div className="flex w-[83px] h-full gap-[5px]">
            <Image src="/assets/car.svg" alt="car" width={22} height={22} />
            <span className="text-[#11142D] font-medium text-xs">
              {numberOfBedrooms}
            </span>
          </div>
          <div className="flex w-[91px] h-full gap-1">
            <Image
              src="/assets/cross.svg"
              alt="sale price"
              width={22}
              height={22}
            />
            <span className="text-[#11142D] font-medium text-xs">{sale}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyDisplay;
