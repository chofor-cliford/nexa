import { Button } from "@/components/ui/button";
import { facilities, profileImage, stars } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const PropertyDetails = () => {
  return (
    <div className="bg-[#FCFCFC] w-[1151px] h-[834px] my-5 ml-5 rounded-[15px]">
      <div className="flex flex-col p-[25px] gap-[25px]">
        <Link
          href="/property"
          className="flex gap-3 cursor-pointer items-center"
        >
          <Image
            src="/assets/leftArrow.svg"
            alt="leftArrow"
            width={10}
            height={10}
          />
          <h2 className="text-2xl font-semibold">Details</h2>
        </Link>

        <div className="w-[1111px] h-[739px] flex gap-[15px]">
          <div className="flex h-full flex-col w-[764px] gap-5">
            <div className="w-full h-[346px] flex gap-5 items-center">
              <Image
                src="/assets/room1.png"
                alt="Main building"
                width={541}
                height={346}
                className="object-cover rounded-[10px]"
              />
              <div className=" flex flex-col gap-5">
                <Image
                  src="/assets/room2.png"
                  alt="room showcase"
                  className="object-cover rounded-[10px]"
                  width={203}
                  height={346}
                />
                <div className="w-[203px] h-[162px] relative block text-center z-20 cursor-pointer">
                  <Image
                    src="/assets/room3.png"
                    alt="room showcase"
                    className="object-cover rounded-[10px]"
                    width={203}
                    height={346}
                  />
                  <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/50 rounded-[10px] hover:bg-black/60 transition-all ease-out duration-100" />
                  <span className="absolute left-0 right-0 top-0 bottom-0 text-white block font-medium text-lg self-center">
                    -10
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[703px] flex h-[232px] flex-col gap-5">
              <div className="w-full h-[96px] justify-between flex items-center">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex flex-col gap-2.5">
                    <h4 className="font-medium text-[18px] leading-[24.59px] text-[#11142D]">
                      Apartment
                    </h4>
                    <h3 className="font-medium text-[22px] leading-[30.05px] text-[#11142D]">
                      Star Sun Hotel & Apportment
                    </h3>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/assets/location.svg"
                      alt="location"
                      className="filter-grey"
                      width={18}
                      height={18}
                    />
                    <p className="font-normal text-[14px] leading-[22px] text-[#808191]">
                      North Carolina USA
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    {stars.map((star, i) => (
                      <Image
                        key={i}
                        src={star}
                        alt="star"
                        width={24}
                        height={24}
                      />
                    ))}
                  </div>
                  <span className="font-medium text-[16px] leading-[21.86px] text-[#11142D]">
                    Price
                  </span>
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-[25px] leading-[34.15px] text-primary-BLUE">
                      $80
                    </span>
                    <span className="font-medium text-[14px] leading-[22px] text-[#808191]">
                      For One Day
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-[703px] h-[116px] gap-[27px]">
                <h2 className="font-medium text-[18px] leading-[24.59px] text-[#11142D]">
                  Facility
                </h2>
                <div className="flex flex-col w-[703px] justify-between h-[64px]">
                  <div className="flex justify-between items-center">
                    {" "}
                    {facilities.slice(0, 4).map((facility) => (
                      <div key={facility.title} className="flex gap-2">
                        <Image
                          src={facility.icon}
                          alt="facility"
                          width={18}
                          height={18}
                          className="filter-grey"
                        />
                        <p className="font-normal text-[14px] leading-[22px] text-[#11142D]">
                          {facility.title}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="justify-between flex items-center">
                    {" "}
                    {facilities.slice(4).map((facility) => (
                      <div key={facility.title} className="flex gap-2">
                        <Image
                          src={facility.icon}
                          alt="facility"
                          width={18}
                          height={18}
                          className="filter-grey"
                        />
                        <p className="font-normal text-[14px] leading-[22px] text-[#11142D]">
                          {facility.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-[714px] h-[111px] flex flex-col gap-2.5">
                <h2 className="font-medium text-[18px] leading-[24.59px] text-[#11142D]">
                  Description
                </h2>
                <p className="font-normal text-[14px] leading-[19.12px] text-[#808191]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>

          <div className="h-[739px] w-[326px] flex flex-col items-center">
            <div className="w-[276px] h-[311px] flex flex-col gap-[25px] items-center">
              <Image
                src="/assets/more.svg"
                alt="more"
                width={18}
                height={18}
                className="self-end cursor-pointer"
              />
              <div className="w-[276px] h-[286px] flex flex-col items-center gap-[25px]">
                <div className="w-[90px] h-[90px]">
                  <Image
                    src={profileImage}
                    alt="person"
                    width={90}
                    height={90}
                    className="object-cover rounded-full"
                  />
                </div>

                <div className="h-[112px] w-[267px] gap-2.5 flex flex-col">
                  <div className="gap-[5px] h-[52px] w-full flex flex-col items-center">
                    <span className="font-semibold text-[18px] leading-[24.59px] text-[#11142D]">
                      Hussian Ahmed
                    </span>
                    <span className="font-normal text-[14px] leading-[22px] text-[#808191]">
                      Agent
                    </span>
                  </div>
                  <div className="w-[267px] h-[50px] gap-1 flex flex-col items-center">
                    <div className="flex gap-[16px] cursor-pointer">
                      <Image
                        src="/assets/location.svg"
                        alt="location"
                        width={12}
                        height={12}
                        className="filter-grey"
                      />
                      <span className="font-normal text-[14px] leading-[22px] text-[#808191]">
                        North Carolina USA
                      </span>
                    </div>
                    <span className="font-semibold text-[16px] leading-[24px] text-[#11142D]">
                      10 Property
                    </span>
                  </div>
                </div>

                <div className="flex gap-[21px] h-[44px] w-[276px] items-center">
                  <Button className="w-full h-full bg-primary-BLUE rounded-[5px] gap-2.5 hover:bg-blue-600 cursor-pointer">
                    <Image
                      src="/assets/message.svg"
                      alt="message"
                      width={24}
                      height={24}
                    />{" "}
                    <span className="font-semibold text-[16px] leading-[24px] text-[#ffffff]">
                      Message
                    </span>
                  </Button>
                  <Button className="w-full h-full bg-[#2ED480] rounded-[5px] gap-2.5 hover:bg-green-500 cursor-pointer">
                    <Image
                      src="/assets/phone.svg"
                      alt="call"
                      width={24}
                      height={24}
                    />{" "}
                    <span className="font-semibold text-[16px] leading-[24px] text-[#fff]">
                      Call
                    </span>
                  </Button>
                </div>
              </div>

              <Link href={`/property/2/property-detail`} className="w-[320px] h-[306px]">
                <Image
                  src="/assets/map.png"
                  alt="map"
                  className="object-cover rounded-[10px] cursor-pointer"
                  width={320}
                  height={306}
                />
              </Link>
              <Button className="bg-primary-BLUE w-full hover:bg-blue-600 cursor-pointer font-normal text-[16px] leading-[24px] text-[#fff]">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
