import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets"; // ✅ IMPORT DATA

export const StoreContext = createContext();



const StoreContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState({}); // ✅ STATE FOR CART ITEMS
  const addToCart = (itemId) => {
       if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev, [itemId]:1}));
       }
       else{
              setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}) );


       }
 }
const removeFromCart = (itemId) => {
  setCartItems((prev) => {
    if (!prev[itemId]) return prev;

    if (prev[itemId] === 1) {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    }

    return { ...prev, [itemId]: prev[itemId] - 1 };
  });
};



useEffect(()=>{
console.log(cartItems);

},[cartItems])

const contextValue = {
  food_list,
  cartItems,
  addToCart,
  removeFromCart,
  setCartItems
}

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
