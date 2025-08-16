import React, { useEffect } from "react";
import { useState } from "react";
import '/src/index.css'
import { Link } from "react-router-dom";

import { useCart } from "./Context";

function Navbar() {

    const { cart } = useCart();

    const [menuOpen, setMenuOpen] = useState(false);



    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const controlNavabr = () => {
        if (window.scrollY > lastScrollY) {
            setShowNavbar(false);
        }
        else {
            setShowNavbar(true)
        }

        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavabr)

        return () => {
            window.removeEventListener("scroll", controlNavabr)
        }
    }, [lastScrollY])

    return (
        <>
            <div className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
                {/* Top Bar sm--> works uunder 640px */}
                <div className=" hidden sm:block w-full h-10 bg-black relative">
                    <div className="text-left pl-5 sm:pl-20 pt-2">
                        <p className="text-white font-ubuntu text-sm sm:text-base">
                            Don't miss our holiday offer - up to 50% OFF!
                        </p>
                    </div>
                    <div className="absolute right-5 sm:right-20 top-1/2 -translate-y-1/2 flex space-x-4">
                        <img className="w-5 h-5" src="../../../public/facebook.png" alt="Facebook" />
                        <img className="w-5 h-5" src="../../../public/telephone.png" alt="Telephone" />
                        <img className="w-5 h-5" src="../../../public/gmail.png" alt="Gmail" />
                        <img className="w-5 h-5" src="../../../public/instagram.png" alt="Instagram" />
                    </div>
                </div>

                {/* Main Navbar */}
                <div className="w-full bg-white shadow-md">
                    <div className="container mx-auto px-5 flex items-center justify-between h-20">
                        {/* Logo */}
                        <a href="#"><p className="text-2xl sm:text-3xl font-ubuntu font-medium">DripCode</p></a>

                        {/* Desktop Menu */}
                        <ul className="hidden 2xl:flex font-ubuntu font-medium space-x-20">
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/about"><li>About Us</li></Link>
                            <Link to="/product_list"><li>Products</li></Link>
                            <Link to="/contact_us"><li>Contact Us</li></Link>
                            <Link to="/news"><li>News</li></Link>
                            <Link to="/services"><li>Services</li></Link>
                        </ul>

                        {/* Right Icons */}
                        <div className="hidden 2xl:flex space-x-7 ">
                            <a href="#"><img className="w-6 h-6" src="../../../public/search.png" alt="Search" /></a>
                            <a href="#"><img className="w-6 h-6" src="../../../public/people.png" alt="User" /></a>
                            <Link to="/cart"><img className="w-6 h-6" src="../../../public/shopping-bag.png" alt="Cart" />
                                {cart.length > 0 && (
                                    <span
                                        style={{
                                            position: "relative",
                                            top: -9,
                                            right: -9,
                                            backgroundColor: "red",
                                            color: "white",
                                            borderRadius: "80%",
                                            padding: "2px 6px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        {cart.length}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}

                        <button className="2xl:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="2xl:hidden text-center px-5 pb-4 bg-white font-ubuntu font-medium">
                            <ul className="font-medium font-ubuntu space-x-10">
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/about"><li>About Us</li></Link>
                                <Link to="/product_list"><li>Products</li></Link>
                                <Link to="/contact_us"><li>Contact Us</li></Link>
                                <Link to="/news"><li>News</li></Link>
                                <Link to="/services"><li>Services</li></Link>
                            </ul>

                            <div className="flex justify-center item-center space-x-10 pt-7">
                                <a href="#"><img className="w-6 h-6" src="../../../public/search.png" alt="Search" /></a>
                                <a href="#"><img className="w-6 h-6" src="../../../public/people.png" alt="User" /></a>
                                <Link to="/cart"><img className="w-6 h-6" src="../../../public/shopping-bag.png" alt="Cart" /></Link>

                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}

export default Navbar