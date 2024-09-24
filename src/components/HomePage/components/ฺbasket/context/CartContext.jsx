import React, {createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const storeCardItems = JSON.parse(localStorage.getItem('cartItems')) || [] ;
    const storedPrice = JSON.parse(localStorage.getItem('getItem_price')) || 0;
    const [cartItems, setCartItems] = useState(storeCardItems);
    let [totalPrice, setTotalPrice] = useState(storedPrice);

    const addToCart = (item, vat_price) => {
        setCartItems((prevItems) => [...prevItems, item]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + parseFloat(vat_price)); // ยังไม่ได้กำหนด ราคา VAT
    }

    const removeFromCart = (item, price) => {
        const updateCartitems = cartItems.filter((cartItems) => cartItems.id !== item.id);
        setCartItems(updateCartitems);

        setTotalPrice(totalPrice - price);

    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('carttItems_price', JSON.stringify(totalPrice))
    }, [totalPrice]);

    console.log('storedPrice', storedPrice )


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice, setTotalPrice }}>
        {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context
};
