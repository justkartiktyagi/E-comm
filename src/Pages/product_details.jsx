import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../Pages/components/Context.jsx";
import axios from "axios";

function Product_detail() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const { addToCart } = useCart()
    // const [rating, setRating] = useState(2);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
                console.log(res)
            })
            .catch(err => console.error(err));
    }, [id]);

    if (!product) return <p>Loading...</p>;
    const stars = Math.round(product.rating?.rate || 0);





    return (
        <>
            <div>
                <div className="flex flex-col  pt-[200px] pb-[120px]  items-center justify-center w-full">
                    <p className="text-white text-center font-ubuntu">Home/Product detail</p>
                    <p className="text-5xl text-white font-bold text-center font-ubuntu ">Product Detail</p>
                </div>
                <div className=" bg-white">
                    <div className="h-full w-full grid grid-cols-1 gap-6 container mx-auto py-10 px-5 lg:px-40 lg:grid-cols-[1fr_1.5fr] ">
                        <div className="bg-gray-100 px-5 flex justify-center items-center">
                            <img className="h-full w-full" src={product.image} alt="" srcSet="" />
                        </div>
                        <div className="">
                            <p className="text-3xl pt-5 font-bold font-ubuntu ">{product.title}</p>
                            <div className="flex flex-col items-left ">
                                <div className="flex mt-5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className={`text-2xl ${star <= stars ? "text-yellow-400" : "text-gray-300"}`}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xl w-20 leading-[2.5rem] font-bold pt-7">${product.price}</p>
                            <p className="text-left font-ubuntu pb-5">Inclusive all taxes</p>
                            <button className="bg-blue-400 cursor-pointer text-white px-4 py-2 text-sm  rounded font-bold hover:bg-white hover:text-black transition duration-300" onClick={() => addToCart(product)}>
                                Add To Cart
                            </button>
                            <p className="pb-5 pt-5 font-ubuntu leading-loose">{product.description}
                            </p>
                        </div>
                    </div>
                    <div className="bg-white h-full py-10 w-full">
                        <p className="text-2xl text-center underline decoration-black-500 h-3 underline-offset-14 decoration-2 ">Description</p>
                        <div className="container mx-auto pt-12 px-4  lg:px-40 space-y-4">
                            <p>Pellentesque dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Amet facilisis magna etiam tempor orci eu lobortis. Senectus et netus et malesuada fames ac turpis. Lobortis elementum nibh tellus molestie nunc non blandit massa enim.</p>
                            <p>Scelerisque purus semper eget duis at tellus at. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien.</p>
                            <p>Nunc sed blandit libero volutpat sed. Justo eget magna fermentum iaculis eu non diam. Mauris sit amet massa vitae tortor condimentum. Ligula ullamcorper malesuada proin libero nunc. Pharetra pharetra massa massa ultricies mi quis.</p>
                            <p>Pulvinar mattis nunc sed blandit libero volutpat sed. Duis at tellus at urna condimentum mattis. Enim sit amet venenatis urna cursus. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim.</p>
                        </div>

                    </div>
                    <div className="bg-white h-full py-10 w-full">
                        <p className="text-2xl text-center underline decoration-black-500 h-3 underline-offset-14 decoration-2 ">Reviews</p>
                        <div className="container mx-auto pt-12 px-4 lg:px-40 ">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-14">
                                {/* Heading */}
                                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                                    {product.title}
                                </h2>
                                <hr className="mb-6" />

                                {/* Review */}
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    {/* Avatar */}
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                                            B
                                        </div>
                                    </div>

                                    {/* Review Content */}
                                    <div className="flex-1 pb-5 w-full">
                                        {/* Name + Date + Stars */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                            <div>
                                                <span className="font-semibold text-sm sm:text-base">Michael</span>
                                                <span className="text-gray-500 text-xs sm:text-sm ml-1 sm:ml-2">
                                                    – DECEMBER 23, 2021
                                                </span>
                                            </div>
                                            <div className="flex pb-5 ">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <span
                                                        key={star}
                                                        className={`text-2xl ${star <= stars ? "text-yellow-400" : "text-gray-300"}`}
                                                    >
                                                        ★
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                                            Mauris sit amet massa vitae tortor condimentum. Ligula ullamcorper
                                            malesuada proin libero nunc. Pharetra pharetra massa massa ultricies
                                            mi quis.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Product_detail