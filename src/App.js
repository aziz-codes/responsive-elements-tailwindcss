import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Home, Analytics, Blogs, Profile, Users } from "./pages/index";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Settings from "./layouts/Settings";
import { useStateContext } from "./contexts/Context";
const App = () => {
  const { clicked, setClicked, navMenu } = useStateContext();
  const ModalRef = useRef();
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (ModalRef.current.contains(e.target)) {
      } else {
        setClicked(false);
      }
    });
  });
  return (
    <div
      className={`w-full h-full flex ${
        navMenu === "navbar" ? "flex-col" : "flex-row"
      } gap-2`}
    >
      {navMenu === "navbar" ? <Navbar /> : <Sidebar />}
      <div
        className={`w-full px-2 ${
          navMenu === "sidebar" ? "md:ml-24 lg:ml-56 mt-4 ml-24" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
      <div
        className="fixed right-4 bottom-4 p-1 bg-slate-100 shadow-xl rounded-full"
        ref={ModalRef}
      >
        <Cog6ToothIcon
          className="h-7 w-7 cursor-pointer hover:scale-95 transition-all ease-in-out duration-100"
          onClick={() => setClicked(!clicked)}
        />
        {clicked && (
          <>
            <div className="absolute right-4 bottom-16 h-96 w-56 z-50 max-w-3xl bg-white shadow-lg border">
              <Settings />

              <div className="absolute h-4 w-4 bg-white rotate-45 -bottom-1 right-2 "></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
