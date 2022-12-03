import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <AppContext.Provider
      value={{
        clicked,
        setClicked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useStateContext = () => useContext(AppContext);
