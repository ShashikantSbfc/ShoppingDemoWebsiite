// import { createContext, useState } from "react";


// export const CartContext = createContext();


// export const CartProvider = ({ children }) => {
// const [cart, setCart] = useState([]);


// const addToCart = (product) => {
// setCart([...cart, product]);
// };


// const removeFromCart = (id) => {
// setCart(cart.filter((item) => item.id !== id));
// };


// return (
// <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
// {children}
// </CartContext.Provider>
// );
// };
import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // 👉 Total Price Logic (auto calculated)
    const totalPrice = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price, 0);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
