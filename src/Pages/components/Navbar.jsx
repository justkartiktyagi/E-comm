import React from "react";
import '/src/index.css'

function Navbar() {


    return (
        <>
            <div className="w-100% h-10 top-[-10] relative bg-black   ">
                <div className="text-left">
                    <p className="text-white pl-20 pt-2  font-ubuntu  ">Don't miss our holiday offer - up to 50%
                        OFF!</p>
                </div>

                <img className="absolute right-[138px] top-1/2 -translate-y-1/2 w-5 h-5"
                     src="../../../public/facebook.png" alt=""/>
                <img className="absolute right-[238px] top-1/2 -translate-y-1/2 w-5 h-5"
                     src="../../../public/telephone.png" alt=""/>
                <img className="absolute right-[88px] top-1/2 -translate-y-1/2 w-5 h-5"
                     src="../../../public/instagram.png" alt=""/>
                <img className="absolute right-[188px] top-1/2 -translate-y-1/2 w-5 h-5" src="../../../public/gmail.png"
                     alt=""/>


            </div>
            <div className="w-full h-20 top-0  bg-white ">
                <div className="container mx-auto pl-20 pr-20 flex items-center justify-between h-full">

                    <a href="#"><p className="text-3xl font-ubuntu font-medium">DripCode</p></a>
                    <div className=" flex text-center">
                        <ul className="flex font-medium  font-ubuntu space-x-15 ">
                            <a href="#">
                                <li>Home</li>
                            </a>
                            <a href="#">
                                <li>About Us</li>
                            </a>
                            <a href="#">
                                <li>Products</li>
                            </a>
                            <a href="#">
                                <li>Contact Us</li>
                            </a>
                            <a href="#">
                                <li>News</li>
                            </a>
                            <a href="#">
                                <li>Services</li>
                            </a>
                        </ul>
                    </div>
                    <div className="space-x-7">
                        <button>
                            <a href="#"><img className="w-7 h-7" src="../../../public/search.png" alt=""/></a>
                        </button>
                        <button>
                            <a href="#"> <img className="w-7 h-7" src="../../../public/people.png"
                                              alt=""/></a>
                        </button>
                        <button>
                            <a href="#"> <img className=" w-7 h-7" src="../../../public/shopping-bag.png"
                                              alt=""/></a>
                        </button>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Navbar