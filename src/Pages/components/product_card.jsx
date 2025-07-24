

function Product_Card({image,title,price , category}){

    return(
        <div>
            
                <div className=" bg-white w-full h-[390px] flex flex-col">
                    <img className="h-48 w-full object-contain mb-8" src={image} alt='{title}'></img>
                    <div className=" mt-1 flex justify-between items-center">
                    {/* <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full ml-3 font-semibold">
                     Best Seller
                    </span> */}                
                    </div>
                    <div className="">
                        <p className="mt-2 ml-5 font-ubuntu font-regular font-semibold text-md mt-2 ">{title}</p>
                        <p className="mt-2 ml-5 font-ubuntu font-regular text-sm mt-2 ">{category}</p>

                    </div>
                    <div className="justify-between items-center ml-3 mt-4">
                        <span className="text-lg font-bold mt-2 ml-2 text-green-600">{price}</span>
                        <br>
                        </br>
                        <button className="bg-black text-white w-40 py-2 mt-2 ml-2 text-sm font-medium hover:bg-gray-800 transition">
                            Add To Cart
                        </button>
                    </div>

                </div>
            
        </div>
    )
}

export default Product_Card