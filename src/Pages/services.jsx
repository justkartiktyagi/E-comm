

function Services() {

    const Captoins = [
        {
            index: 1,
            icon: "👗",
            title: "Personal Stylist",
            desc: "Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolourabitur ultricies ultrices nullaorbi blandit."
        },
        {
            index: 2,
            icon: "👕",
            title: "Cloth Assortment",
            desc: "Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolourabitur ultricies ultrices nullaorbi blandit."
        },
        {
            index: 3,
            icon: "📏",
            title: "Taking Measurements",
            desc: "Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolourabitur ultricies ultrices nullaorbi blandit."
        },
        {
            index: 4,
            icon: "🧺",
            title: "Dry Cleaning",
            desc: "Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolourabitur ultricies ultrices nullaorbi blandit."
        }
    ]

    return (
        <>
            <div className="">
                <div className="flex flex-col  pt-[200px] pb-[120px]  items-center justify-center w-full">
                    <p className="text-white font-ubuntu">Home/Services</p>
                    <p className="text-5xl text-white font-bold font-ubuntu ">Services</p>
                </div>

                <div className="w-full px-4 md:px-20 py-10 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    {Captoins.map((caption) => (
                        <div key={caption.index} className="bg-[#121214] text-white p-15 py-30 hover:bg-red-600 flex container mx-auto flex-col sm:flex-row items-start gap-5">
                            <div className="text-5xl">{caption.icon}</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{caption.title}</h3>
                                <p className="text-gray-500">{caption.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid place-items-center bg-white w-full ">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-5 py-7 place-items-center lg:px-30 container mx-auto">
                        <img src="../../../public/gucci-removebg-preview.png" alt="1" className="w-60 h-40 object-cover" />
                        <img src="../../../public/nike-removebg-preview.png" alt="2" className="w-60 h-40 object-cover" />
                        <img src="../../../public/adidas-removebg-preview.png" alt="3" className="w-60 h-40 object-cover" />
                        <img src="../../../public/sony-removebg-preview.png" alt="4" className="w-90 h-40 object-cover" />
                    </div>
                </div>

                <div className="bg-white w-full h-full gap-5 grid  place-items-center ">
                    <div className="place-items-center grid lg:gap-20 px-6 py-4 lg:py-15 grid-cols-1 lg:grid-cols-2 lg:px-30 container mx-auto ">
                        <div className="">
                            <img className="h-full w-full" src="../../../public/pexels-ionela-mat-268382825-32582889.jpg" alt="1" />

                        </div>
                        <div>
                            <p className="text-red-600 text-2xl pt-5 lg:pt-0 font-bold">Our mission</p>
                            <p className="font-bold text-5xl/15 pt-1  font-ubuntu ">Your Personal Styling Team Always Here</p>
                            <p className=" pt-1 text-gray-400 leading-loose">Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor.
                                Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum.
                                Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur.
                                Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit.
                                Nulla facilisi.</p>
                            <button className="bg-white border-2 hover:bg-red-600 border-black p-4  h-17 w-40 mt-4 text-black" type="button">More Detail</button>
                        </div>

                    </div>
                </div>

                <div className="bg-white w-full py-16">
                    <div className="container mx-auto px-4">
                        <div className="relative w-full max-w-8xl mx-auto h-full overflow-hidden ">
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

export default Services

