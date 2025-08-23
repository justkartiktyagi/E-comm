import React from "react";
import { useCart } from "./components/Context";

function Cart() {
    const { cart, removeFromCart, UpdateQuantity, formattedSubtotal } = useCart();

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col pt-[200px] pb-[120px] items-center justify-center w-full bg-gray-900">
                <p className="text-white font-ubuntu">Home / Cart</p>
                <p className="text-5xl text-white font-bold font-ubuntu">Cart</p>
            </div>

            {/* Cart Content */}
            <div className="bg-white w-full py-10">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
                    
                    {/* Cart Table (Desktop) / Cards (Mobile) */}
                    <div className="p-6">
                        {/* Table Head (Hidden on Mobile) */}
                        <table className="w-full border-collapse hidden lg:table">
                            <thead>
                                <tr className="text-left border-b">
                                    <th className="py-3">Product</th>
                                    <th className="py-3">Quantity</th>
                                    <th className="py-3">Subtotal</th>
                                    <th className="py-3">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-6 text-gray-500">
                                            Your cart is empty 🛒
                                        </td>
                                    </tr>
                                ) : (
                                    cart.map((item) => (
                                        <tr key={item.id} className="border-b">
                                            {/* Product */}
                                            <td className="flex items-center gap-4 py-4">
                                                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover border" />
                                                <div>
                                                    <p className="font-medium text-gray-950">{item.title}</p>
                                                    <p className="text-gray-600">Price : ${item.price}</p>
                                                </div>
                                            </td>

                                            {/* Quantity */}
                                            <td className="py-4">
                                                <div className="flex items-center border w-28 justify-between px-2 py-1">
                                                    <button 
                                                        className="text-lg cursor-pointer"
                                                        onClick={() => UpdateQuantity(item.id, item.quantity - 1)}
                                                        disabled={item.quantity <= 1}
                                                    >-</button>
                                                    <span>{item.quantity}</span>
                                                    <button 
                                                        className="text-lg cursor-pointer"
                                                        onClick={() => UpdateQuantity(item.id, item.quantity + 1)}
                                                    >+</button>
                                                </div>
                                            </td>

                                            {/* Subtotal */}
                                            <td className="py-4 text-gray-600">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </td>

                                            {/* Remove */}
                                            <td className="py-4 px-4 text-lg cursor-pointer" onClick={() => removeFromCart(item.id)}>
                                                <img className="h-6 w-6" src="../../public/bin.png" alt="Remove" />
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>

                        {/* Mobile Card View */}
                        <div className="space-y-6 lg:hidden">
                            {cart.length === 0 ? (
                                <p className="text-center py-6 text-gray-500">Your cart is empty 🛒</p>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="border p-4 rounded-lg shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover border" />
                                            <div className="flex-1">
                                                <p className="font-medium text-gray-950">{item.title}</p>
                                                <p className="text-gray-600">Price: ${item.price}</p>
                                            </div>
                                            <img
                                                className="h-6 w-6 cursor-pointer"
                                                src="../../public/bin.png"
                                                alt="Remove"
                                                onClick={() => removeFromCart(item.id)}
                                            />
                                        </div>

                                        <div className="flex justify-between items-center mt-4">
                                            <div className="flex items-center border w-28 justify-between px-2 py-1">
                                                <button
                                                    className="text-lg cursor-pointer"
                                                    onClick={() => UpdateQuantity(item.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                >-</button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    className="text-lg cursor-pointer"
                                                    onClick={() => UpdateQuantity(item.id, item.quantity + 1)}
                                                >+</button>
                                            </div>
                                            <p className="text-gray-600 font-medium">
                                                Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Coupon + Update */}
                        <div className="flex flex-col md:flex-row items-center mt-6 gap-4">
                            <div className="flex gap-2 w-full md:w-1/2">
                                <input type="text" placeholder="Coupon Code" className="border px-3 py-2 w-full" />
                                <button className="bg-red-600 text-white px-6 py-2">Apply</button>
                            </div>
                            <div className="flex justify-end w-full md:w-1/2">
                                <button type="button" className="bg-red-600 text-white px-8 py-2">Update Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* Cart Totals */}
                    <div className="border p-6 h-fit">
                        <h2 className="text-lg font-semibold mb-4">Cart totals</h2>
                        <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">Sub-total</span>
                            <span>${formattedSubtotal}</span>
                        </div>
                        <div className="flex justify-between py-2 font-semibold">
                            <span>Total</span>
                            <span>${formattedSubtotal}</span>
                        </div>
                        <button className="bg-red-600 text-white w-full py-3 mt-4">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
