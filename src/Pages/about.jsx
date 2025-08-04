

const peoples = [
    {
        id: 1,
        src: "../../../public/0yrKZzFI.jpg",
        caption1: "Jerry Hill",
        posts: "Designer"

    },
    {
        id: 2,
        src: "../../../public/fYYKa70e.jpg",
        caption1: "Roger Jones",
        posts: "Manager"
    },
    {

        id: 3,
        src: "../../../public/W4VXNJuz.jpg",
        caption1: "Bianca Oliver",
        posts: "Consultant"
    },
    {
        id: 3,
        src: "../../../public/1mF7-Jrj.jpg",
        caption1: "Ally Miller",
        posts: "Stylist"

    }



]


function About() {
    return (
        <>
            <div>
                <section className="justify-center  pt-[200px] pb-[120px]  flex flex-col items-center bg-black py-25 w-full ">
                    <p className="font-ubuntu text-white ">Home/About Us</p>
                    <p className="text-white text-5xl font-bold font-ubuntu text-center  ">About Us</p>
                </section>

                <section className="bg-white ">
                    <p className="text-center pt-20 text-gray-400">Ready To Help Our Team</p>
                    <p className="text-center  text-6xl font-bold font-ubuntu text-black py-5">Our Team</p>
                    <div className="w-full container mx-auto grid grid-cols-1 sm:grid-cols-2 space-x-6 md:grid-cols-3 lg:grid-cols-4 items-center text-center gap-6 px-10 py-8">
                        {peoples.map((people) => (
                            <div>
                                <div className="flex justify-center">
                                    <img
                                        className="h-[420px] sm:h-250px md:h-[450px]"
                                        src={people.src}
                                        alt={people.caption1}
                                    />
                                </div>
                                <p className="text-center text-2xl font-bold font-ubuntu pt-5 text-black">{people.caption1}</p>
                                <p className="text-center text-black font-ubuntu pt-3 pb-10" >{people.posts}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-[#f7f6f5]">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 container mx-auto pt-10 md:pt- h-full w-full " >
                        <div className="px-20">
                            <p className="md:text-5xl text-2xl  text-black sm:text-left text-center font-bold font-ubuntu mb-10 leading-loose">Shop The 5 Biggest Shoe Trends</p>
                            <p className="md:text-2xl text-xl text-center md:text-left text-gray-400 font-ubuntu"> Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum purus viverra accumsan in nisl.</p>
                            <div className="flex justify-center md:justify-start">
                                <button className="h-20 mt-20 w-40 text-xl font-ubuntu md:items-center bg-red-600" type="button">Shop Know</button>
                            </div>
                        </div>
                        <div className=" flex items-center align-middle pl-20 mt-10 md:mt-0 md:pl-0 justify-center">
                            <img className="md:h-250 h-full  w-full pr-20" src="../../../public/There’s no denying that the Nike Dunk, both high and low, is on track to become the hottest sneaker of the year — again_ Known for its relatively thick silhouette and coveted colorways, the iconic shoe has undoubtedly.png" alt="" srcset="" />
                        </div>
                    </div>
                </section>
                
                <section className="bg-white w-full py-16">
                    <div className="container mx-auto px-4">
                        <div className="relative w-full max-w-8xl mx-auto overflow-hidden">
                           
                            <img
                                className="w-full h-100   object-cover"
                                src="../../../public/pexels-christian-heitz-285904-842711.jpg"
                                alt="newsletter"
                            />

                          
                            <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">
                                <h2 className="text-3xl md:text-5xl font-bold text-white font-ubuntu">
                                    Newsletter Updates
                                </h2>
                                <p className="text-white text-base md:text-xl mt-4 font-ubuntu">
                                    Subscribe to receive emails on new product arrivals & special offers
                                </p>

                                
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
                </section>
            </div>
        </>
    )
}

export default About