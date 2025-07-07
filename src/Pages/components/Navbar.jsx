import React from "react";
import '/src/index.css'

function Navbar() {


    return (
        <>
            <div className="w-100% h-10 top-0 relative bg-black   ">
                <div className="text-left">
                    <p className="text-white pl-25 pt-2  font-serif  ">Don't miss our holiday offer - up to 50% OFF!</p>
                </div>

                <img className="absolute right-[180px] top-1/2 -translate-y-1/2 w-5 h-5"
                     src="../../../public/facebook.png" alt=""/>
                <img className="absolute right-[280px] top-1/2 -translate-y-1/2 w-5 h-5"
                     src="../../../public/telephone.png" alt=""/>
                <img className="absolute right-[130px] top-1/2 -translate-y-1/2 w-5 h-5"
                     src="../../../public/instagram.png" alt=""/>
                <img className="absolute right-[230px] top-1/2 -translate-y-1/2 w-5 h-5" src="../../../public/gmail.png"
                     alt=""/>


            </div>
            <div className="w-full h-20 top-0  bg-white ">
                <div className="container mx-auto pl-40 pr-20 flex items-center justify-between h-full">

                    <p className="text-3xl font-roboto font-bold">ShopHop</p>
                    <div className=" flex text-center">
                        <ul className="flex font-bold  font-roboto space-x-15 ">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Products</li>
                            <li>Contact Us</li>
                            <li>News</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div className="space-x-7">
                        <button>Search</button>
                        <button>Bag</button>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Navbar