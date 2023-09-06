import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center padding-y padding-x">
      <Link href="/" className="flex items-center">
        <h2 className="text-xl font-bold md:block text-white ">BOLAGILA</h2>
      </Link>
      <p className="text-xs md:text-sm text-white">create by Ahmad Aziz</p>
    </div>
  );
};

export default Navbar;
