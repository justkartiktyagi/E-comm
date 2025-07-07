import Navbar from "./components/Navbar.jsx";

function Home() {
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

            </div>
        </>
    )
}

export default Home;