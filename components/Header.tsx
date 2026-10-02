import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="bg-gray-100 w-full relative flex h-20 md:h-40 shadow-md">
        <div className="h-full md:w-100 -translate-x-1/8 w-60">
          <Image
            src={"/curryshop/logo2.png"}
            alt="ロゴ"
            fill
            loading="eager"
            sizes="33vw"
            className="object-cover object-center"
          />
        </div>
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full md:w-100 w-60">
          <Image
            src={"/curryshop/title3.png"}
            alt="タイトル"
            fill
            loading="eager"
            sizes="33vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2">
          <Link href="/auth/login">
            <FaRegUserCircle className="text-4xl text-[#d6ae34]" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
