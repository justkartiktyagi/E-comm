

function Contact_Us() {
    return (
        <>
            <div>
                <div className="flex flex-col  pt-[200px] pb-[120px]  items-center justify-center w-full">
                    <p className="text-white font-ubuntu">Home/Contact Us</p>
                    <p className="text-5xl text-white font-bold font-ubuntu ">Contact Us</p>
                </div>
                <div className="relative w-full min-h-screen">
                    {/* Background Split (Blue Top, White Bottom) */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-400 z-0"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white z-0"></div>

                    {/* Content Layer */}
                    <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
                        {/* Left: Contact Info */}
                        <div className="md:w-1/2 p-10 text-black flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                            <p className="mb-6">
                                Feel free to contact us? Submit your queries here and we will get back to you as soon as possible.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 lg:pt-50">
                                    <span className="text-xl">📞</span>
                                    <p>470-601-1911</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">📧</span>
                                    <p>Pagedone1234@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">📍</span>
                                    <p>789 Oak Lane, Lakeside, TX 54321</p>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4 mt-8">
                                <a href="#"><i className="fab fa-facebook text-black text-xl"></i></a>
                                <a href="#"><i className="fab fa-instagram text-black text-xl"></i></a>
                                <a href="#"><i className="fab fa-x-twitter text-black text-xl"></i></a>
                                <a href="#"><i className="fab fa-linkedin text-black text-xl"></i></a>
                                <a href="#"><i className="fab fa-youtube text-black  text-xl"></i></a>
                            </div>
                        </div>

                        {/* Right: Form Box Floating Across Background */}
                        <div className="md:w-1/2 flex items-center justify-center p-6">
                            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl z-10">
                                <h3 className="text-xl font-semibold mb-6">Send Us Message</h3>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-full"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-full "
                                />
                                <textarea
                                    placeholder="Phone"
                                    rows="4"
                                    className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 transition-all"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact_Us