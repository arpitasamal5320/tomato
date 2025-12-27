

import { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import './FoodItem.css';

const FoodItem = ({ id, name, price, description, image }) => {
  
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image img-fluid"
          src={image}
          style={{ transition: "transform 0.3s ease-in-out" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
          alt={name}
        />

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img  onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
            <p>{cartItems[id]}</p>
            <img  onClick={() =>addToCart(id) } src={assets.add_icon_green} alt=""/>
          </div>
        )}
      </div> 

      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Rs {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
