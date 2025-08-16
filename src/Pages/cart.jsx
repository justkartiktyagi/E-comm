import React from "react";

function Cart() {
    return (
        <div>
            <div className="flex flex-col  pt-[200px] pb-[120px]  items-center justify-center w-full">
                <p className="text-white font-ubuntu">Home/Cart</p>
                <p className="text-5xl text-white font-bold font-ubuntu ">Cart</p>
            </div>
         <div className="bg-red-600 w-full py-10">
            <div className="grid grid-cols-[3fr_1fr] gap-6">
                <div className="border-6 p-6">
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
                                    <img src="https://via.placeholder.com/80" alt="T-shirt" className="w-20 h-20 object-cover border"/>
                                    <div>
                                        <p className="font-medium">Black-T Shirt</p>
                                        <p className="text-gray-50">$50</p>
                                    </div>
                                </td>
                                {/* Quantity */}
                                <td className="py-4">
                                    <div className="flex items-center border borde-red-500 w-28 justify-between px-2 py-1">
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
                        <div className="flex w-1/2"></div>

                    </div>
                </div>
            </div>

         </div>
            
        </div>
    )
}

export default Cart;