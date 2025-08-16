import React from "react";

function Cart() {
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
                                <tr className="border-b">
                                    {/* Product */}
                                    <td className="flex items-center gap-4 py-4">
                                        <img src="../../public/180-GSM-Polyester-T-shirt-08.jpg" alt="T-shirt" className="w-20 h-20 object-cover border" />
                                        <div>
                                            <p className="font-medium">Black-T Shirt</p>
                                            <p className="text-gray-50">$50</p>
                                        </div>
                                    </td>
                                    {/* Quantity */}
                                    <td className="py-0">
                                        <div className="flex items-center border border-red-500 w-30 justify-between px-2 py-1">
                                            <button className="text-lg">-</button>
                                            <span>1</span>
                                            <button className="text-lg">+</button>
                                        </div>
                                    </td>
                                    {/* Subtotal */}
                                    <td className="py-4 text-gray-600">$50</td>
                                </tr>
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
                            <span>50$</span>
                        </div>
                        <div className="flex justify-between py-2 font-semibold">
                            <span>Total</span>
                            <span>$50.00</span>
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