import Navbar from "./components/Navbar.jsx";

function Home() {

    const images = [

        {
            id: 1,
            src: "../../../public/credit-card.png",
            caption1: "Secure Payment",
            caption2: "100% secure payment"
        },
        {
            id: 2,
            src: "../../public/delivery-status.png",
            caption1: "30 Days Return",
            caption2: "If Goods have Problems"
        },
        {
            id: 3,
            src: "../../public/support.png",
            caption1: "24/7 Support",
            caption2: "Dedicated Support",
        },
        {
            id: 4,
            src: "../../public/free-delivery.png",
            caption1: "Free Delivery",
            caption2: "For all order Over 80$",
        },

    ];

    const catalogs = [
        {
            id: 5,
            src: "../../public/Check_out_our_cap_selection_-removebg-preview.png",
            caption1: "Snapback Cap",
            caption2: "$30",
            caption3: "Accessories",
        },
        {
            id: 6,
            src: "../../public/Zenni_Round_Eyeglasses_Gray_Stainless_Steel-removebg-preview.png",
            caption1: "Retro Sunglasses",
            caption2: "$55",
            caption3: "Accessories",

        },
        {
            id: 7,
            src: "../../public/Nike_Air_Force_1__07_LV8_Men_s_Shoes__Black_-removebg-preview.png",
            caption1: "Gray Shoes",
            caption2: "$50",
            caption3: "sneakers",
        },
        {
            id: 8,
            src: "../../public/Manfinity_Hypemode_Men_Color_Block_Playing_Card_Print_Short_Sleeve_Button_Up_Collar_Shirt_Without_Tee-removebg-preview.png",
            caption1: "Black T-Shirt",
            caption2: "$50",
            caption3: "T-Shirts",

        }


    ];

    return (
        <>
            <Navbar/>
            <div>
                <div className="relative w-full container mx-auto">
                    <img className="h-200  w-full"
                         src="../../public/Black Red Minimalist Fashion Product Introduction Landscape Banner.png"
                         alt="Banner Image"/>

                    <button
                        className=" absolute bottom-32 left-32 font-medium font-ubuntu text-xl bg-red-600  text-black py-5 px-7">
                        Explore Now
                    </button>

                </div>
                <div className="bg-gray-300">
                    <div className="h-50 w-full grid grid-cols-4 items-center container mx-auto  text-center">
                        {images.map((image) => (
                            <div key={image.id} className="text-center">
                                <div className="justify-center flex">
                                    <img className="h-15 w-15" src={image.src} alt={image.caption1}></img>
                                </div>
                                <p className="text-2xl mt-5 font-bold">{image.caption1}</p>
                                <p className="text-m ">{image.caption2}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white w-full h-200 ">
                    <div className="container mx-auto">
                        <div className="pl-20 pt-20">
                            <p className="font-ubuntu font-bold">Checkout latest products</p>
                            <p className="text-6xl font-ubuntu flex text-black ">New Arrivals</p>
                        </div>
                        <div className="pt-20 pl-20 grid grid-cols-4">
                            {catalogs.map((catalog) => (
                                <div>
                                    <div
                                        className="bg-gray-100 h-80 w-80 flex justify-center items-center ">
                                        <img className=" h-50 w-50"
                                             src={catalog.src} alt={catalog.caption1}></img>

                                    </div>
                                    <p className="text-xl pt-5 font-bold text-black font-ubuntu">{catalog.caption1}</p>
                                    <p className="pt-2 font-ubuntu">{catalog.caption2}</p>
                                    <p className="pt-2 font-ubuntu">{catalog.caption3}</p>
                                    <div className="pt-3">
                                        <button
                                            className="cursor-pointer bg-red-600 font-bold font-ubuntu text-black h-10 w-40 ">ADD
                                            TO CART
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;