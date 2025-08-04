


function News() {


    const news_images = [
        {
            id: 1,
            src: "../../../public/pexels-daiangan-102129.jpg",
            caption1: "Lobortis Elementum Nibhtellus Molestie Mauris",
            caption2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
            date: "In Lifestyle / On December 24, 2021"

        },
        {
            id: 2,
            src: "../../../public/pexels-dejan-krstevski-724759-1578997.jpg",
            caption1: "Condimentum Odvenenatis Vestibulum Dapibus",
            caption2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
            date: "In Trends / On December 24, 2021"

        },
        {
            id: 3,
            src: "../../../public/pexels-kowalievska-1040424.jpg",
            caption1: "Accumsan Tortor Posuere Acut Consequat",
            caption2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
            date: "In Lifestyle / On December 24, 2021"

        },
        {
            id: 4,
            src: "../../../public/pexels-august-de-richelieu-4427816.jpg",
            caption1: "Malesuada Bibendum Arcu Elementum Laoreet",
            caption2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
            date: "In Lifestyle / On December 17, 2021"

        },
        {
            id: 5,
            src: "../../../public/pexels-nietjuhart-934070.jpg",
            caption1: "Consequat Semper Viverra Nam Libero",
            caption2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
            date: "In Lifestyle / On December 17, 2021"

        },
        {
            id: 6,
            src: "../../../public/pexels-the-5th-50003-179909(1).jpg",
            caption1: "Tristique Senectus Etnetus Otmalesuada",
            caption2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…",
            date: "In Lifestyle / On December 14, 2021"

        },


    ]




    return (
        <>
            <div>
                <div className="flex flex-col  pt-[200px] pb-[120px]  items-center justify-center w-full">
                    <p className="text-white font-ubuntu">Home/News</p>
                    <p className="text-5xl text-white font-bold font-ubuntu ">News</p>
                </div>
                <div className="bg-white h-full w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto py-20 px-6">
                        {news_images.map((news) => (
                            <div key={news.id} className="flex flex-col bg-white h-full">
                                <div className="w-full aspect-[3/2] overflow-hidden">
                                    <img className="w-full h-full" src={news.src}/>
                                </div>
                                <div className="flex flex-col justify-between gap-3 p-4">
                                    <p className="text-2xl font-bold font-ubuntu">{news.caption1}</p>
                                    <p className="font-ubuntu text-sm">{news.caption2}</p>
                                    <p className="font-ubuntu text-gray-400 text-sm">{news.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div>

                </div>
            </div>

        </>
    )
}

export default News