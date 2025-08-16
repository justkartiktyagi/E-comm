import { useCart } from "./components/Context";

function Home() {

    const { addToCart } = useCart()

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
            price: "$30",
            caption3: "Accessories",
        },
        {
            id: 6,
            src: "../../public/Zenni_Round_Eyeglasses_Gray_Stainless_Steel-removebg-preview.png",
            caption1: "Retro Sunglasses",
            price: "$55",
            caption3: "Accessories",

        },
        {
            id: 7,
            src: "../../public/Nike_Air_Force_1__07_LV8_Men_s_Shoes__Black_-removebg-preview.png",
            caption1: "Gray Shoes",
            price: "$50",
            caption3: "sneakers",
        },
        {
            id: 8,
            src: "../../public/Manfinity_Hypemode_Men_Color_Block_Playing_Card_Print_Short_Sleeve_Button_Up_Collar_Shirt_Without_Tee-removebg-preview.png",
            caption1: "Black T-Shirt",
            price: "$50",
            caption3: "T-Shirts",

        }


    ];
    const images_2 = [
        {
            id: 1,
            src: "../../public/Dönme dolap _Texting (Tamamlandı).jpg",
            caption1: "461 Articles",
            caption2: "Jackets",
        },
        {
            id: 2,
            src: "../../public/Spring AI Bags Collection.jpg",
            caption1: "289 articles",
            caption2: "Sweaters",


        },
        {
            id: 3,
            src: "../../public/Qunel_com.jpg",
            caption1: "345 articles",
            caption2: "Accessories"


        }
    ];

    const images_3 = [
        {
            id: 1,
            src: "../../public/girl-8373900_1280.jpg",
            caption1: "Lobortis Elementum Nibhtellus Molestie Mauris",
            caption2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
            caption4: "In Lifestyle / On December 24, 2021"
        },
        {
            id: 2,
            src: "../../public/girls-1853958_1280.jpg",
            caption1: "Condimentum Odvenenatis Vestibulum Dapibus",
            caption2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
            caption4: "In Lifestyle / On December 24, 2021"


        },
        {
            id: 3,
            src: "../../public/young-woman-4266712_1280.jpg",
            caption1: "Accumsan Tortor Posuere Acut Consequat",
            caption2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
            caption4: "In Lifestyle / On December 24, 2021"
        },


    ]




    return (
        <>
            {/* max-w-screen-xl it uses bascally like a container max wisth 1280px */}
            <div>
                <div className="relative w-full max-w-screen-xl pt-[110px] mx-auto">
                    <img
                        className="w-full h-auto object-cover"
                        src="../../public/Black Red Minimalist Fashion Product Introduction Landscape Banner.png"
                        alt="Banner Image"
                    />

                    <button
                        className="absolute left-4 bottom-6 text-xs sm:text-sm md:text-base py-1 px-3 sm:py-2 sm:px-5 md:py-3 md:px-6 bg-red-600 lg:ml-5 text-black font-medium font-ubuntu">
                        Explore Now
                    </button>
                </div>

                <div className="bg-gray-300">
                    <div className="w-full container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center text-center gap-6 px-4 py-8">
                        {images.map((image) => (
                            <div key={image.id} className="text-center">
                                <div className="flex justify-center">
                                    <img
                                        className="h-10 w-10 sm:h-20 sm:w-20 md:h-24 md:w-24"
                                        src={image.src}
                                        alt={image.caption1}
                                    />
                                </div>
                                <p className="text-md sm:text-xl mt-5 font-bold break-words">{image.caption1}</p>
                                <p className="text-sm sm:text-base text-gray-700">{image.caption2}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-gray-400">
                </div>
                <div className="bg-white w-full py-20">
                    <div className="container mx-auto px-4 sm:px-8">
                        {/* Heading */}
                        <div className=" text-center">
                            <p className="font-ubuntu font-bold text-sm sm:text-base">Checkout latest products</p>
                            <p className="text-4xl sm:text-5xl lg:text-6xl font-ubuntu text-black">New Arrivals</p>
                        </div>

                        {/* Product Grid */}
                        <div className="pt-10 sm:pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {catalogs.map((catalog) => (
                                <div key={catalog.id} className="flex flex-col h-full">
                                    <div className="bg-gray-100 flex justify-center items-center h-64 sm:h-72 md:h-80">
                                        <img
                                            src={catalog.src}
                                            alt={catalog.caption1}
                                            className="hover:scale-130 transition-transform duration-400 h-40 w-40 object-contain"
                                        />
                                    </div>

                                    {/* Texts */}
                                    <p className="text-lg sm:text-xl pt-5 font-bold text-black font-ubuntu">{catalog.caption1}</p>
                                    <p className="pt-2 text-sm sm:text-base font-ubuntu">{catalog.price}</p>
                                    <p className="pt-2 text-sm sm:text-base font-ubuntu">{catalog.caption3}</p>

                                    {/* Spacer + Button */}
                                    <div className="mt-auto pt-4">
                                        <button
                                            className="w-full sm:w-40 cursor-pointer bg-red-600 text-black font-bold font-ubuntu h-10"
                                            onClick={() =>
                                                addToCart({
                                                    id: catalog.id,
                                                    name: catalog.caption1,
                                                    price: catalog.price || 0,
                                                    image: catalog.src,
                                                })
                                            }
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
                <div className="container mx-auto bg-transparent py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                        {images_2.map((image_2) => (
                            <div key={image_2.id} className="relative w-full h-102 sm:h-80 md:h-156 overflow-hidden ">
                                <img src={image_2.src} alt={image_2.caption1} className="w-full h-full object-cover"
                                />

                                {/* Overlay Caption */}
                                <div className="absolute bottom-0 w-full lg:w-70 bg-black bg-opacity-80 text-white p-4">
                                    <p className="text-sm font-ubuntu">{image_2.caption1}</p>
                                    <h2 className="text-2xl sm:text-3xl font-bold font-ubuntu">{image_2.caption2}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white w-full py-16">
                    <div className="w-full bg-white py-20">
                        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 lg:px-0 relative">

                            {/* Black Box */}
                            <div className="bg-black text-white p-10 w-full lg:w-1/3 z-10 relative font-ubuntu">
                                <div className="bg-transparent p-10 text-left">
                                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">New Cloth <br />Technologies</h2>
                                    <p className="text-sm leading-relaxed mb-3">Mauris vitae ultricies leo integer malesuada.</p>
                                    <p className="text-sm leading-relaxed mb-3">Odio tempor orci dapibus ultrices in.</p>
                                    <p className="text-sm leading-relaxed mb-3">Egestas diam in arcu cursus euismod.</p>
                                    <p className="text-sm leading-relaxed mb-3">Dictum purus viverra accumsan in nisl.</p>
                                    <p className="text-sm leading-relaxed mb-3">Tempor id eu</p>
                                    <p className="font-cursive text-xl mt-40">Alice W</p>
                                </div>
                            </div>

                            {/* Image with responsive overlap */}
                            <div className="w-full lg:w-1/2 -ml-0 lg:-ml-[200px] mt-10 lg:mt-0 z-0">
                                <img
                                    src="../../../public/Lozan.jpg"
                                    alt="Fashion model"
                                    className="w-full h-auto  object-cover"
                                />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="bg-white w-full pt-1">
                    <h2 className="text-center font-ubuntu text-xl text-black pt-10">Check out popular products</h2>
                    <h1 className="text-center font-ubuntu text-5xl text-black pt-10">Popular Products</h1>

                    <div className="container mx-auto gap-8 content-center justify-center pt-10 lg:pt-10 flex flex-wrap grid-cols-3">
                        {images_3.map((image3) => (
                            <div key={image3.id} className="max-w-md justify-center content-center">
                                <a href="#">
                                    <img className="h-80 w-full px-2" src={image3.src} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight font-ubuntu text-black">{image3.caption1}</h5>
                                    </a>
                                    <p className="mb-3 font-normal dark:text-gray-400">{image3.caption2}</p>
                                    <a href="#">
                                        <h5 className="mb-3 font-normal font-ubuntu text-sm dark:text-gray-400">{image3.caption4}</h5>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white w-full py-16">
                    <div className="container mx-auto px-4">
                        <div className="relative w-full max-w-8xl mx-auto overflow-hidden">
                            {/* Background Image */}
                            <img
                                className="w-full h-100   object-cover"
                                src="../../../public/pexels-christian-heitz-285904-842711.jpg"
                                alt="newsletter"
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">
                                <h2 className="text-3xl md:text-5xl font-bold text-white font-ubuntu">
                                    Newsletter Updates
                                </h2>
                                <p className="text-white text-base md:text-xl mt-4 font-ubuntu">
                                    Subscribe to receive emails on new product arrivals & special offers
                                </p>

                                {/* Input + Button */}
                                <div className="flex flex-col md:flex-row items-center mt-6 w-full max-w-xl gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-white p-3 border-none text-black font-ubuntu"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-red-600 text-white px-6 py-3 font-ubuntu hover:bg-red-700 transition"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;