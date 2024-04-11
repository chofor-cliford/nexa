"use client";

import { logo, notification, profileImage, search } from "@/public/assets";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-day-picker";

const Navbar = () => {
  return (
    <nav className="bg-[#FCFCFC] px-10 py-5 flex justify-between w-full h-[70px]">
      <div className="flex items-center">
        <Link href="/" className="flex gap-2">
          <Image src={logo} alt="logo" />
          <p className="font-bold text-black text-2xl">Nexa</p>
        </Link>
      </div>

      <div className="flex w-[405px] h-[38px] items-center text-secondary-brown rounded-lg bg-[#F4F4F4] gap-1 px-2">
        <Image src={search} alt="search-icon" />
        <input
          type="text"
          placeholder="Search property, customer, etc"
          className="bg-[#F4F4F4] outline-none text-black p-2 w-full"
          autoFocus
        />
      </div>

      <div className="flex items-center gap-3">
        <Image src={notification} alt="notification" className="cursor-pointer" />

        <div className="flex flex-col">
          <SignedIn>
            <div className="flex-center cursor-pointer gap-2 p-4">
              <UserButton afterSignOutUrl="/" showName />
            </div>
          </SignedIn>

          <SignedOut>
            <Button className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
