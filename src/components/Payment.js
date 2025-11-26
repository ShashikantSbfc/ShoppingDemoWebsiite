import "./Payment.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePayNow = () => {
    // Payment successful → Redirect to Thank You page
    navigate("/thank-you");
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>

      <div className="payment-card">
        <h3>Total Amount: <span>${totalPrice}</span></h3>

        <label>Card Holder Name</label>
        <input type="text" placeholder="Enter full name" />

        <label>Card Number</label>
        <input type="number" placeholder="xxxx xxxx xxxx xxxx" />

        <div className="payment-row">
          <div>
            <label>Expiry</label>
            <input type="text" placeholder="MM/YY" />
          </div>

          <div>
            <label>CVV</label>
            <input type="password" placeholder="***" />
          </div>
        </div>

        <button className="pay-btn" onClick={handlePayNow}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
