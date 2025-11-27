import {Routes, Route, Link } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider, CartContext } from "./context/CartContext";
import "./components/ProductList.css";
import "./components/Cart.css";
import "./App.css";
import { useContext } from "react";
import Payment from "./components/Payment";
import "./components/Payment.css";
import ThankYou from "./components/ThankYou";
import "./components/ThankYou.css";
function Navbar() 
{
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Shopping Website</Link>

      <Link to="/cart" className="cart-btn">
        🛒 Cart+ 
        <span className="cart-count">{cart.length}</span>
      </Link>
      
    </nav>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app-container">

          {/* NAVBAR */}
          <Navbar />

          {/* ROUTES */}
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>

        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
