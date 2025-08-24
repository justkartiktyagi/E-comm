import { useState } from "react";
import { useCart } from "../Pages/components/Context.jsx";


function Product_detail() {


    const { addToCart } = useCart()
    const [rating, setRating] = useState(2);


    return (
        <>
            <div>
                <div className="flex flex-col  pt-[200px] pb-[120px]  items-center justify-center w-full">
                    <p className="text-white font-ubuntu">Home/Product detail</p>
                    <p className="text-5xl text-white font-bold font-ubuntu ">Product Detail</p>
                </div>
                <div className=" bg-white">
                    <div className="h-full w-full grid grid-cols-1 gap-6 container mx-auto py-10 px-5 lg:px-40 lg:grid-cols-[1fr_1.5fr] ">
                        <div className="bg-gray-100 px-5 flex justify-center items-center">
                            <img className="h-full w-full" src="../../public/A_white_t_-_shirt_with_a_button_on_the_front_is_hanging_from_a_gray_background___Premium_AI-generated_image-removebg-preview.png" alt="" srcset="" />
                        </div>
                        <div className="">
                            <p className="text-3xl pt-5 font-bold font-ubuntu ">Snapback Cap</p>
                            <div className="flex flex-col items-left ">
                                <div className="flex  ">
                                    {[1, 2, 3, 4].map((star) => (
                                        <button key={star} onClick={() => setRating(star)} className={`w-8 h-8 text-2xl leading-[4.5rem] ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}>
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xl w-20 leading-[2.5rem] font-bold pt-7">$30</p>
                            <p className="text-left font-ubuntu pb-5">Inclusive all taxes</p>
                            <button
                                className="w-full sm:w-40 cursor-pointer bg-blue-400 transition duration-300 text-white font-bold font-ubuntu h-10"
                                onClick={() =>
                                    addToCart({
                                        id: catalog.id,
                                        name: catalog.caption1,
                                        price: catalog.price || 0,
                                        image: catalog.src,
                                    })
                                }>ADD TO CART
                            </button>
                            <p className="pb-5 pt-5 font-ubuntu leading-loose">Scelerisque purus semper eget duis at tellus at. In fermentum posuere urna nec
                                tincidunt praesent semper feugiat nibh. Commodo quis imperdiet massa tincidunt
                                nunc pulvinar sapien.Nunc sed blandit libero volutpat sed. Justo eget magna fermentum
                                iaculis eu non diam. Mauris sit amet massa vitae tortor condimentum. Ligula ullamcorper
                                malesuada proin libero nunc. Pharetra pharetra massa massa ultricies mi quis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Product_detail