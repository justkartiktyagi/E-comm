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
                <div className="bg-white">
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
            </div>
        </>
    )
}

export default Home;