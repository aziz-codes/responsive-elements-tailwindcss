import React from "react";
import myImage from "./images/pic.jpeg";
const App = () => {
  return (
    <div className="max-w-3xl w-96 bg-red-500 max-h-screen h-screen flex flex-col lg:flex-row items-center">
      <img
        src={myImage}
        alt="profile"
        className="p-2 max-w-3xl w-60 h-60 rounded-full object-fill max-h-full"
      />
      <h4>Aziz</h4>
    </div>
  );
};

export default App;
