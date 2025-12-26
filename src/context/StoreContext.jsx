import { createContext } from "react";
import { food_list } from "../assets/assets"; // ✅ IMPORT DATA

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{ food_list }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
