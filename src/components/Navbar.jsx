import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const links = ["Home", "Users", "Analytics", "Blogs"];
  const [size, setSize] = useState(window.innerWidth);
  const [sideMenuOpen, setsideMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (size >= 640) {
      setsideMenuOpen(false);
    } else {
      setsideMenuOpen(true);
    }
  }, [size]);

  return (
    <div className="px-2 flex flex-row items-center justify-between lg:justify-self-center h-12 sticky top-0 bg-white border-b shadow-sm ">
      <h2 className="font-semibold tracking-tight text-my-blue">Bokkey</h2>
      <div className="flex-row gap-6 hidden sm:flex">
        {links.map((link, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              isActive
                ? "text-my-blue font-semibold tracking-tight cursor-pointer"
                : "cursor-pointer"
            }
            to={index === 0 ? "/" : link.toLowerCase()}
          >
            {link}
          </NavLink>
        ))}
      </div>
      <div className="hidden sm:block h-7 w-7 rounded-full bg-sky-400"></div>
      <Bars3Icon
        className={`${sideMenuOpen ? "hidden" : "block"} h-6 w-6 sm:hidden`}
        onClick={() => setsideMenuOpen(!sideMenuOpen)}
      />
      <div
        className={`${
          sideMenuOpen ? "block" : "hidden"
        } h-screen top-0 absolute right-0 w-64 bg-slate-300 bg-opacity-30 shadow-xl   z-50 flex flex-col justify-between`}
      >
        <div className="flex flex-col gap-5 font-semibold tracking-tight w-full ">
          <XMarkIcon
            className="h-6 w-6 m-2 cursor-pointer"
            onClick={() => setsideMenuOpen(false)}
          />
          <div className="flex flex-col gap-5 flex-1 justify-center items-center mt-4 ">
            {links.map((link, index) => (
              <NavLink
                key={index}
                onClick={() => setsideMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-my-blue font-semibold tracking-tight cursor-pointer flex-1"
                    : "cursor-pointer"
                }
                to={index === 0 ? "/" : link.toLowerCase()}
              >
                {link}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-400 w-full p-0   h-20 mb-3">
          <div className=" flex flex-row items-center justify-center mt-6 gap-3">
            <div className=" h-16 w-16 rounded-full bg-sky-400"></div>
            <p>azizcodes</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
