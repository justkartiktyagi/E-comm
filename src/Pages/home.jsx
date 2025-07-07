import Navbar from "./components/Navbar.jsx";


function Home() {
    return (
        <>
            <Navbar/>
            <div className="items-center justify-center text-center grid grid-cols-2 pt-25">
                <div>
                    <img src="../../public/download-removebg-preview.png" alt="image"/>
                </div>
                <div>02</div>
            </div>
        </>
    )
}

export default Home;