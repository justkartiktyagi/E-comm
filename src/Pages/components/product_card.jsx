function Product_Card(){

    const shoes=[
        {
            id:1,
            src:"../../../public/Women's Irvinel.jpeg"
        }


    ]

    return(
        <div>
            <div className="text-center justify-center h-50 w-full items-center flex ">
                <p className="text-3xl text-white font-ubuntu">Product_card</p>
            </div>
            <div className="bg-red-600 rounded-sm justify-center items-center flex w-full h-200">
                <div className="rounded-2xl justify-center max-w-xs bg-white shadow-lg p-1.5  ">
                    <img className="h-70 w-full rounded-3xl border-8 border-white " src="../../../public/Women's%20Irvinel.jpeg" alt='Women SHoes'></img>
                    <div className=" mt-1 flex justify-between items-center">
                    <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full ml-3 font-semibold">
                     Best Seller
                    </span>
                        <button className="mr-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="red"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.41
                                        4.42 3 7.5 3c1.74 0 3.41 0.81
                                         4.5 2.09C13.09 3.81 14.76 3 16.5
                                         3 19.58 3 22 5.41 22 8.5c0
                                         3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </button>
                    </div>
                    <div className="">
                        <p className="mt-2 ml-3 font-ubuntu font-regular">Women's Irvine - Tidepool</p>

                    </div>
                    <div className="flex justify-between items-center ml-3 mt-4">
                        <span className="text-lg font-bold text-green-600">$180.00</span>
                        <button className="bg-black text-white w-45 px-4 py-2  rounded-full text-sm font-medium hover:bg-gray-800 transition">
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product_Card