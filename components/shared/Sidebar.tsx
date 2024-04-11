"use client";

import { SidebarLinks } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[250px] flex flex-col bg-[#FCFCFC] h-full">
      <div className="flex flex-col gap-4 h-[336px] items-center mt-3">
        {SidebarLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            pathname.split("/")[1] === link.title.toLowerCase();

          return (
            <Link
              href={link.href}
              key={link.title}
              className={`${
                isActive ? "bg-primary-BLUE font-bold" : ""
              } flex gap-2 rounded-lg h-[56px] w-[218px] py-4 px-6 font-medium`}
            >
              <Image
                src={link.icon}
                alt={link.title}
                className={`${isActive ? "" : "filter-grey"}`}
              />
              <span
                className={`${
                  isActive ? "text-slate-100" : "text-secondary-brown"
                }`}
              >
                {link.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
