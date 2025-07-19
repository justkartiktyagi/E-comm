import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

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
    const images_2=[
        {
            id:1,
            src:"../../public/Dönme dolap _Texting (Tamamlandı).jpg",
            caption1:"461 Articles",
            caption2:"Jackets",
        },
        {
            id:2,
            src:"../../public/Spring AI Bags Collection.jpg",
            caption1:"289 articles",
            caption2:"Sweaters",


        },
        {
            id:3,
            src:"../../public/Qunel_com.jpg",
            caption1:"345 articles",
            caption2:"Accessories"


        }
    ];

    const images_3=[
        {
            id:1,
            src:"../../public/girl-8373900_1280.jpg",
            caption1:"Lobortis Elementum Nibhtellus Molestie Mauris",
            caption2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
            caption4:"In Lifestyle / On December 24, 2021"
        },
        {
            id:2,
            src:"../../public/girls-1853958_1280.jpg",
            caption1:"Condimentum Odvenenatis Vestibulum Dapibus",
            caption2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
            caption4:"In Lifestyle / On December 24, 2021"


        },
        {
            id:3,
            src:"../../public/young-woman-4266712_1280.jpg",
            caption1:"Accumsan Tortor Posuere Acut Consequat",
            caption2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
            caption4:"In Lifestyle / On December 24, 2021"
        },


    ]




    return (
        <>
            <Navbar/>
            <div>
                <div className="relative w-full container mx-auto">
                    <img className="h-200 w-full"
                         src="../../public/Black Red Minimalist Fashion Product Introduction Landscape Banner.png"
                         alt="Banner Image"/>

                    <button
                        className=" absolute bottom-32 left-32 font-medium font-ubuntu text-xl bg-red-600  text-black py-5 px-7">
                        Explore Now
                    </button>

                </div>
                <div className="h-80 w-full grid grid-cols-4 items-center bg-gray-300 text-center">
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
                <div className="bg-gray-300">
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
                <div className="container mx-auto  bg-transparent h-200 w-full py-10  " >
                    <div className=" container mx-auto grid grid-cols-3 flex-wrap justify-center w-full  place-items-center pt-50">
                        {images_2.map((image_2)=>(
                            <div className=" flex relative w-100 h-126 ">
                            <img  className="w-full h-full " src={image_2.src} alt=""/>
                                <div className="absolute bottom-0 w-80 h-30 bg-black  text-white p-4">
                                    <p className="text-white font-ubuntu  text-sm">{image_2.caption1}</p>
                                    <h2 className="text-white text-3xl font-bold font-ubuntu ">{image_2.caption2}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white w-full h-300">
                    <div className="container mx-auto pl-30 pt-20 flex ">
                        <div className="bg-black absolute h-160 w-150 mt-60">
                            <div className="text-center flex justify-center items-center">
                            <div className="  bg-transparent items-center  h-100 w-100 mt-20">
                            <h1 className="text-white font-ubuntu text-left text-5xl">New Clothes technologies</h1>
                            <p className="text-white font-ubuntu text-xl font-light text-left mt-10">Mauris vitae ultricies leo integer <br></br> malesuada.</p>
                            <p className="text-white font-ubuntu text-xl font-light text-left ">Odio tempor orci dapibus ultrices in.<br></br>  Egestas diam in arcu cursus euismod.<br></br>  Dictum purus viverra accumsan in nisl.<br></br>  Tempor id eu</p>
                                <img className="h-60 w-60  " src="../../public/9eebe3656ce9480b941a34e2ed54bb37-removebg-preview.png" alt="signature"></img>
                            </div>
                            </div>

                        </div>
                        <div className="ml-110">
                            <img className="h-260 w-200" src="../../public/Lozan.jpg" alt="HEadimage"></img>

                        </div>
                    </div>
                </div>
                <div className="bg-white w-full h-240">
                    <h2 className="text-center font-ubuntu text-xl text-black pt-10">Check out popular products</h2>
                    <h1 className="text-center font-ubuntu text-5xl text-black pt-10">Popular Products</h1>
                    <div className="container mx-auto gap-8 content-center justify-center pt-40 flex flex-wrap grid-cols-3">
                    {images_3.map((image3)=> (



                        <div className="max-w-md justify-center content-center   ">
                            <a href="#">
                                <img className=" h-80 w-full " src={image3.src} alt=""/>
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight font-ubuntu text-black">{image3.caption1}</h5>
                                </a>
                                <p className="mb-3 font-normal  dark:text-gray-400">{image3.caption2}</p>
                                <a href="#">
                                    <h5 className="mb-3 font-normal font-ubuntu text-sm dark:text-gray-400">{image3.caption4}</h5>
                                </a>
                            </div>
                        </div>



                    ))}
                    </div>
                </div>
                <div className="bg-white h-150  w-full">
                    <div className="container relative mx-auto justify-center flex  ">
                        <img className=" h-120 w-300 " src="../../public/pexels-christian-heitz-285904-842711.jpg"
                             alt="newsletter"></img>
                        <p className="absolute pt-30 text-5xl font-ubuntu text-white font-bold">Newsletter Updates</p>
                        <p className="absolute pt-50 text-3xl font-ubuntu text-white ">Subscribe to receive emails on
                            new product arrivals & special offers</p>
                        <div className="absolute pt-70 pr-60">

                            <input type="text" id="first_name"
                                   className="bg-white text-xl w-100 p-3.5 dark:text-black "
                                   placeholder="Email" required/>
                        </div>
                        <div className="absolute pt-70 pl-100">
                        <button type="Submit" className="text-white h-15  bg-red-600  focus:ring-4 focus:outline-none focus:ring-blue-300 font-ubuntu text-sm w-55 px-0 py-2.5 text-center ">Subscribe</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Home;