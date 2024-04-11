import { dataUrl } from "@/lib/utils";
import { CardProps } from "@/types";
import Image from "next/image";

const Card = ({ title, price, address, imageUrl, country }: CardProps) => {
  return (
    <div className="flex flex-col gap-2.5 h-[245px] w-[329px] cursor-pointer">
      <div className="h-[186px] w-[329px] flex ">
        {!imageUrl && (
          <Image
            src={dataUrl}
            alt="placeholder"
            className="object-cover rounded-md"
            width={1000}
            height={1000}
          />
        )}

        <Image
          src={imageUrl}
          alt={title}
          className="object-cover rounded-md"
          width={1000}
          height={1000}
        />
      </div>

      <div className="w-[329px] h-[49px] flex flex-col">
        <div className="flex flex-1 justify-between">
          <h3 className="text-base font-semibold text-[#11142D]">{title}</h3>
          <span className="text-xs font-semibold text-primary-BLUE bg-[#DADEFA] w-fit h-[30px] rounded py-[7px] px-[6px]">
            {price}
          </span>
        </div>
        <span className="flex gap-[6px] items-center">
          <Image
            src="assets/location.svg"
            alt="location"
            width={12}
            height={15}
          />
          <span className="text-sm font-normal text-secondary-brown capitalize">
            {address} {country}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
