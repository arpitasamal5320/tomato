

import { assets } from '../../assets/assets'
import './FoodItem.css'

const FoodItem = ({id,name,price,description,image}) => {

  return (
    <div className="food-item">
      <div className="food-item-ig-container">
        <img
          className="food-item-image img-fluid"
          src={image}
          style={{
            transition: "transform 0.3s ease-in-out"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        />
      </div>

      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts}/>
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Rs{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
