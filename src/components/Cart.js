// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";


// const Cart = () => {
//     const { cart, removeFromCart } = useContext(CartContext);


//     return (
//         <div style={{ marginTop: 30 }}>
//             <h2>Your Cart</h2>
//             {cart.length === 0 ? (
//                 <p>No items in cart</p>
//             ) : (
//                 cart.map((item) => (
//                     <div key={item.id} style={{ marginBottom: 10 }}>
//                         {item.name} - ${item.price}
//                         <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: 10 }}>
//                             Remove
//                         </button>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };


// export default Cart;
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css"; // <-- Import CSS

const Cart = () => {
    const { cart, removeFromCart, totalPrice } = useContext(CartContext);
    const navigate = useNavigate();

    const handlePayment = () => {
        navigate("/payment");
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>

            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-details">
                                {item.name} <span className="item-price">${item.price}</span>
                            </div>

                            <button 
                                onClick={() => removeFromCart(item.id)} 
                                className="remove-btn"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="total-price">
                        Total: ${totalPrice}
                    </div>

                    <button 
                        onClick={handlePayment}
                        className="pay-btn"
                    >
                        Proceed to Payment
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
