import React from "react";
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const links = [
  {
    label: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    label: "Analytics",
    icon: <ChartBarIcon />,
    path: "/analytics",
  },
  {
    label: "Users",
    icon: <UsersIcon />,
    path: "/users",
  },
  {
    label: "Blogs",
    icon: <PaperClipIcon />,
    path: "/blogs",
  },
];

const Sidebar = () => {
  return (
    <div
      className="md:w-20 lg:w-52 fixed left-0 top-0 border shadow-xm h-screen min-h-screen
     bg-white flex flex-col lg:items-start md:items-center items-center"
    >
      <h2 className="font-semibold tracking-tight text-my-blue px-2 mt-5">
        Bokkey
      </h2>
      <div className=" w-full flex flex-col gap-5 px-2 mt-10 md:items-center lg:items-start">
        {links.map((link, index) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex flex-row gap-2 w-full items-center bg-white  font-semibold cursor-pointer h-11 rounded-md justify-center lg:justify-start"
                : "flex flex-row gap-2 items-center bg-white w-full hover:bg-slate-100 cursor-pointer h-11 rounded-md justify-center lg:justify-start"
            }
            key={index}
            to={link.path}
          >
            <span className="h-5 w-5">{link.icon}</span>
            <label className="hidden lg:block cursor-pointer">
              {link.label}
            </label>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
