import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './PlaceOrder.css';

const PlaceOrder = () => {

const { cartItems, food_list } = useContext(StoreContext);

  return (
    <form className='place-order'>

      <div className="place-order-left">
<p className="title">Delivery Info</p>
<div className="multi-fields">
  <input type="text" placeholder="First Name"/>
  <input type="text" placeholder="Last Name"/>
</div>
<input type="email" placeholder="Email Address"/>
<input type="text" placeholder="Street"/>
      <div className="multi-fields">
  <input type="text" placeholder="City"/>
  <input type="text" placeholder="state"/>
</div>
      
   <div className="multi-fields">
  <input type="text" placeholder="ZipCode"/>
  <input type="text" placeholder="Country"/>
</div>   
      <input type="text" placeholder="Phone Number"/>
      
      
      </div>

      <div className="place-order-right">

<div className="cart-bottom">
  <div className="cart-total-container">

    {/* Calculate subtotal */}
    {(() => {
      const subtotal = food_list.reduce(
        (total, item) => total + (item.price * (cartItems[item._id] || 0)),
        0
      );

// Only render if subtotal > 0
      if (subtotal === 0) return null;

      let deliveryFee = 50; // default delivery
      let deliveryMessage = "Standard delivery fee applied";

      if (subtotal > 500) {
        deliveryFee = 0;
        deliveryMessage = "🎉 Free delivery for orders above Rs 500!";
      } else if (subtotal > 300) {
        deliveryFee = 10;
        deliveryMessage = "Reduced delivery fee for orders above Rs 300!";
      }

      const platformFee = 20; // fixed platform fee
      const totalAmount = subtotal + deliveryFee + platformFee;

      return (
        <>
          {/* Subtotal */}
          <div className="cart-total-row">
            <span className="cart-total-label">Subtotal:</span>
            <span className="cart-total-value">Rs {subtotal}</span>
          </div>

          <hr className="cart-bottom-divider" />

          {/* Delivery Fee */}
          <div className="cart-total-row">
            <span className="cart-total-label">Delivery Fee:</span>
            <span className="cart-total-value">Rs {deliveryFee}</span>
          </div>

          {/* Notify customer */}
          <div className="cart-delivery-message">{deliveryMessage}</div>

          <hr className="cart-bottom-divider" />

          {/* Platform Fee */}
          <div className="cart-total-row">
            <span className="cart-total-label">Platform Fee:</span>
            <span className="cart-total-value">Rs {platformFee}</span>
          </div>

          <hr className="cart-bottom-divider" />

          {/* Final Total */}
          <div className="cart-total-row cart-final-total">
            <span className="cart-total-label">Total Amount:</span>
            <span className="cart-total-value">Rs {totalAmount}</span>
          </div>
        </>
      );
    })()}

  </div>
  
</div>
<button>Place Order & Pay</button>

      </div>

    </form>
  )
}

export default PlaceOrder