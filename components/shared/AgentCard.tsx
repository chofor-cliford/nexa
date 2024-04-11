import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type AgentCardProps = {
  imageUrl: string | StaticImageData;
  address: string;
  name: string;
  type: string;
  email: string;
  phoneNumber: string | number;
  propertyNumber: number;
};

const AgentCard = ({
  imageUrl,
  name,
  address,
  type,
  email,
  phoneNumber,
  propertyNumber,
}: AgentCardProps) => {
  return (
    <Link
      href={`/agent/2/agent-detail/`}
      className="h-[193px] w-[1105px] gap-5 flex cursor-pointer"
    >
      <div className="w-[250px] h-[193px] rounded-[2px]">
        <Image src={imageUrl} alt={name} className="object-cover" />
      </div>

      <div className="flex flex-col h-[175px] w-[835px] gap-5 ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[7px]">
            <h2 className="font-semibold text-2xl text-[#11142D]">{name}</h2>
            <span className="font-normal text-sm text-[#808191]">{type}</span>
          </div>
          <Image src="assets/menu.svg" alt="more" width={12} height={12} />
        </div>

        <div className="h-16 gap-5 w-[726px] flex flex-col">
          <div className="w-full h-[22px] flex justify-between items-center">
            <div className="flex flex-1 w-[284px] h-full gap-2.5">
              <Image src="assets/mail.svg" alt="email" width={18} height={18} />
              <span className="font-normal text-sm text-[#808191]">
                {email}
              </span>
            </div>
            <div className="flex flex-1 w-[284px] h-full gap-2.5">
              <Image
                src="assets/location.svg"
                alt="location"
                width={18}
                height={18}
              />
              <span className="font-normal text-sm text-[#808191]">
                {address}
              </span>
            </div>
          </div>

          <div className="w-full h-[22px] flex justify-between items-center">
            <div className="flex flex-1 w-[284px] h-full gap-2.5">
              <Image
                src="assets/phone.svg"
                alt="phone"
                width={18}
                height={18}
              />
              <span className="font-normal text-sm text-[#808191]">
                {phoneNumber}
              </span>
            </div>
            <div className="flex flex-1 w-[284px] h-full gap-2.5">
              <Image
                src="assets/building.svg"
                alt="building"
                width={18}
                height={18}
              />
              <span className="font-normal text-sm text-[#808191]">
                {propertyNumber} Properties
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AgentCard;
