
import { children, createContext, useContext, useEffect, useState } from "react";

// Create context
const CartContext = createContext()


// Hook To Use Cart
export const useCart = () => useContext(CartContext);

// Cart Provider
export const CartProvider = ({ children }) => {
    const [cart, setcart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : []

    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));

    }, [cart])

    // Add item
    const addToCart = (product) => {

        setcart((prev) => {
            // increae valeue of already built item
            const existing = prev.find((item) => item.id === product.id)
            if (existing) {
                return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            // Add new item
            return [...prev, { ...product, quantity: 1 }]
        })
    }

    // Remove item
    const removeFromCart = (id) => {
        //IN this when we click the remove button it compare the id of the item on which we click then if it true then it cretaes a new array in which it dosent add the id which we click
        setcart((prev) => prev.filter((item) => item.id !== id))
    }

    //Update Quantity
    const UpdateQuantity = (id, qty) => {
        // This is used to update th quantity of item in tth checkout page
        setcart((prev) => prev.map((item) => item.id === id ? { ...item, quantity: Math.max(1, qty) } : item))
    }

    // Clear Cart
    const clearCart = () => setcart([])

    //Sub Total
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const formattedSubtotal = subtotal.toFixed(2);
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, UpdateQuantity, clearCart, subtotal, formattedSubtotal }}>
            {children}
        </CartContext.Provider>
    )
}