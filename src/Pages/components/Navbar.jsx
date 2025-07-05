import React from "react";
import imagege_1 from "../../../src/Images/instagram.png"
import imagege_2 from "../../../src/Images/gmail.png";
import imagege_3 from "../../../src/Images/facebook.png";
import imagege_4 from "../../../src/Images/telephone.png";

function Navbar() {
    return (
        <>
            <div className="w-100% h-10 top-0 relative bg-black   ">
                <div className="text-left">
                    <p className="text-white pl-30 pt-2   ">Don't miss our holiday offer - up to 50% OFF!</p>
                </div>


                <img className="absolute right-[50px] top-1/2 -translate-y-1/2 w-5 h-5" src={imagege_4} alt=""/>
                <img className="absolute right-[100px] top-1/2 -translate-y-1/2 w-5 h-5" src={imagege_2} alt=""/>
                <img className="absolute right-[150px] top-1/2 -translate-y-1/2 w-5 h-5" src={imagege_3} alt=""/>
                <img className="absolute right-[200px] top-1/2 -translate-y-1/2 w-5 h-5" src={imagege_1} alt=""/>

            </div>
            <div className="w-100% h-30 bg-white">

            </div>

        </>
    )
}

export default Navbar