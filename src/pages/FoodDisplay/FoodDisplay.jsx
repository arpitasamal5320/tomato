import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext.jsx';
import './FoodDisplay.css';

const FoodDisplay = ({ category }) => {
  const context = useContext(StoreContext);

  // 🔒 SAFETY CHECK (THIS FIXES YOUR ERROR)
  if (!context) {
    return null; // or a loader
  }

  const { food_list } = context;

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>
    </div>
  );
};

export default FoodDisplay;
