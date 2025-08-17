import React from "react";

import { useCart } from "./components/Context";

function Cart() {

    const { cart, removeFromCart, UpdateQuantity, formattedSubtotal } = useCart()

    return (
        <div>
            <div className="flex flex-col  pt-[200px] pb-[120px]  items-center justify-center w-full">
                <p className="text-white font-ubuntu">Home/Cart</p>
                <p className="text-5xl text-white font-bold font-ubuntu ">Cart</p>
            </div>
            <div className="bg-white w-full py-10">
                <div className="grid grid-cols-[3fr_1fr] container mx-auto gap-6">
                    <div className="p-6">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="text-left border-b">
                                    <th className="py-3">Product</th>
                                    <th className="py-3">Quantity</th>
                                    <th className="py-3">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.length === 0 ? (
                                    <tr>
                                        <td colSpan="3" className="text-center py-6 text-gray-500">
                                            Your cart is empty 🛒
                                        </td>
                                    </tr>

                                ) : (
                                    cart.map((item) =>
                                        <tr className="border-b">
                                            {/* Product */}
                                            <td className="flex items-center gap-4 py-4">
                                                <img src={item.image} alt="T-shirt" className="w-30 h-30 object-cover border" />
                                                <div>
                                                    <p className="font-medium text-gray-950">{item.title}</p>
                                                    <p className="text-gray-600">Price : ${item.price}</p>
                                                </div>
                                            </td>
                                            {/* Quantity */}
                                            <td className="py-0">
                                                <div className="flex items-center border border-red-500 w-30 justify-between px-2 py-1">
                                                    <button className="text-lg cursor-pointer " onClick={() => UpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button className="text-lg cursor-pointer " onClick={() => UpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                                </div>
                                            </td>
                                            {/* Subtotal */}
                                            <td className="py-4 text-gray-600"> $ {(item.price * item.quantity).toFixed(2)}</td>
                                            <td className="py-4 px-4 text-lg" onClick={() => removeFromCart(item.id)}>
                                                <img className="h-6 w-6 cursor-pointer " src="../../public/bin.png" alt="" srcset="" />
                                            </td>
                                        </tr>
                                    ))}


                            </tbody>

                        </table>
                        <div className="flex items-center mt-6 gap-4">
                            <div className="flex gap-2 w-1/2">
                                <input type="text" placeholder="Coupon Code" className="border px-3 py-2 w-full" />
                                <button className="bg-red-600 text-white px-10 py-2">Apply Coupon</button>
                            </div>
                            <div className="flex justify-end w-1/2">
                                <button type="button" className="bg-red-600 text-white px-10 py-5">Update Cart</button>
                            </div>
                        </div>

                    </div>

                    <div className="border p-6">
                        <h2 className="text-lg font-semibold mb-4">Cart totals</h2>
                        <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">Sub-total</span>
                            <span> ${formattedSubtotal}</span>
                        </div>
                        <div className="flex justify-between py-2 font-semibold">
                            <span>Total</span>
                            <span> ${formattedSubtotal}</span>
                        </div>
                        <button className="bg-red-600 text-white w-full py-3 mt-4">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cart;