

import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  if (!Array.isArray(food_list)) return null;

  return (
    <div className="food-display " id="food-display">
      <h2>Top Dishes near you ! Try them Now.</h2>

      <div className="food-display-list row g-4">
        {food_list
          .filter(
            (item) => category === "All" || item.category === category
          )
          .map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;




