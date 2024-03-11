import Link from "next/link";
import React from "react";
import { IoFastFood } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-purple-800 text-white text-xs py-6">
      <div className="my-5 container mx-auto">
        <Link href={"/"} className="flex gap-x-3 items-center">
          <h1 className="text-white text-2xl hover:text-red-600 capitalize">
            WoodSoft
          </h1>
        </Link>
      </div>

      <div className=" flex flex-col gap-y-3 container mx-auto my-5">
        <p>+234 706 623 9369</p>
        <span>2275, zone, E Extension, Apo resettlement, Abuja</span>
      </div>

      <div className="capitalize container mx-auto my-5">
        Copyright © 2024 Dash Loite innovation ltd
      </div>
    </footer>
  );
};

export default Footer;
