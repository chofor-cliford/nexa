import Link from "next/link";
import { Button } from "../ui/button";

const PageHeader = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className="flex justify-between items-center h-[48px] w-full">
      <h3 className="font-bold text-2xl text-[#11142D]">{title}</h3>
      <Link href={href} className="w-[137px] h-[48px]">
        <Button className="text-white bg-primary-BLUE w-[137px] h-[48px] flex items-center gap-2.5 font-normal py-3.2  rounded-lg hover:bg-blue-600 hover:font-semibold">
          + Add {title}
        </Button>
      </Link>
    </div>
  );
};

export default PageHeader;
