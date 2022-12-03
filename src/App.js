import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, Analytics, Blogs, Profile, Users } from "./pages/index";
const App = () => {
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
    </div>
  );
};

export default App;
