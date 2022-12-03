import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const Navbar = () => {
  const links = [
    "Home",
    "Features",
    "Users",
    "Analytics",
    "Requests",
    "Sessions",
    "Counters",
    "Blogs",
  ];
  const image_Url =
    "https://images.unsplash.com/photo-1584441405886-bc91be61e56a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&q=80";

  const [sideMenuOpen, setsideMenuOpen] = useState(false);
  return (
    <div className="px-2 flex flex-row items-center justify-between h-10 sticky top-0 bg-white border-b shadow-sm ">
      <img src={image_Url} className="h-8 w-8 rounded-sm" alt="logo" />
      <ul className="flex-row gap-3 hidden md:flex">
        {links.map((link, index) => (
          <li key={index} className="cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
      <Bars3Icon
        className={`${sideMenuOpen ? "hidden" : "block"} h-6 w-6 md:hidden`}
        onClick={() => setsideMenuOpen(!sideMenuOpen)}
      />
      <div
        className={`${
          sideMenuOpen ? "block" : "hidden"
        } h-screen top-0 absolute right-0 w-64 bg-slate-300 bg-opacity-30 shadow-xl   z-50 flex flex-col `}
      >
        <XMarkIcon
          className="h-6 w-6 m-2 cursor-pointer"
          onClick={() => setsideMenuOpen(false)}
        />

        <ul className="flex flex-col gap-5 font-semibold tracking-tight w-full justify-center items-center mt-4">
          {links.map((link, index) => (
            <li key={index} className="cursor-pointer text-black">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
