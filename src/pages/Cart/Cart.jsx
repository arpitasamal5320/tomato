import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
   const navigate = useNavigate();
  return (
    <div className="cart-container">
      <div className="cart-card">
        <div className="cart-card-body">

          {/* Header */}
          <div className="row fw-bold d-none d-md-flex cart-header-row">
            <div className="col-md-2">ITEMS</div>
            <div className="col-md-3">TITLE</div>
            <div className="col-md-2">PRICE</div>
            <div className="col-md-2">QUANTITY</div>
            <div className="col-md-2">TOTAL</div>
            <div className="col-md-1">REMOVE</div>
          </div>

          <hr className="cart-divider d-none d-md-block" />

          {/* Cart Items */}
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className="row align-items-center cart-item-row">

                  {/* Image */}
                  <div className="col-4 col-md-2 cart-item-img mb-2 mb-md-0">
                    <img src={item.image} alt={item.name} />
                  </div>

                  {/* Name */}
                  <div className="col-8 col-md-3 fw-semibold cart-item-title">{item.name}</div>

                  {/* Price */}
                  <div className="col-6 col-md-2 cart-item-price">Rs {item.price}</div>

                  {/* Quantity */}
                  <div className="col-6 col-md-2 cart-item-quantity">{cartItems[item._id]}</div>

                  {/* Total */}
                  <div className="col-6 col-md-2 cart-item-total">
                    Rs {item.price * cartItems[item._id]}
                  </div>

                  {/* Remove */}
                  <div className="col-6 col-md-1">
                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item._id)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}

        </div>

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



      </div>
      <button className="proceed-btn" onClick={() => navigate('/order')}>proceed to order !</button>
    </div>
  );
};

export default Cart;
