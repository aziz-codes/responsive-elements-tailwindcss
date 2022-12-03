import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [navMenu, setNavMenu] = useState("navbar");
  return (
    <AppContext.Provider
      value={{
        clicked,
        setClicked,
        navMenu,
        setNavMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useStateContext = () => useContext(AppContext);
