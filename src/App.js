import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, Analytics, Blogs, Profile, Users } from "./pages/index";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Settings from "./layouts/Settings";
import { useStateContext } from "./contexts/Context";
const App = () => {
  const { clicked, setClicked } = useStateContext();

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <Navbar />
      <div className="w-full px-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
      <div className="fixed right-4 bottom-4 p-1 bg-slate-100 shadow-xl rounded-full">
        <Cog6ToothIcon
          className="h-7 w-7 cursor-pointer hover:scale-95 transition-all ease-in-out duration-100"
          onClick={() => setClicked(!clicked)}
        />
      </div>
      {clicked && <Settings />}
    </div>
  );
};

export default App;
