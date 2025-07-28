

function Services() {

    const Captoins = [
        {
            index: 1,
            icon: "👗", // Replace with actual icons if needed
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
            <div>
                <div className="flex flex-col  items-center justify-center h-80 w-full">
                    <p className="text-white font-ubuntu">Home/Services</p>
                    <p className="text-5xl text-white font-bold font-ubuntu ">Services</p>
                </div>

                <div className="w-full px-4 md:px-20 py-10 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Captoins.map((caption) => (
                        <div key={caption.index} className="bg-[#121214] text-white p-15 py-30 hover:bg-red-600 flex flex-col sm:flex-row items-start gap-5">
                            <div className="text-5xl">{caption.icon}</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{caption.title}</h3>
                                <p className="text-gray-500">{caption.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Services

