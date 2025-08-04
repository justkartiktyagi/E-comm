import { useEffect, useState } from "react";
import Product_Card from "./components/product_card";
import axios from 'axios';

function ProductList() {

    const [Products, setProducts] = useState([])
    const [Loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [Filter_Products, setFiltered_Products] = useState([])
    //Use Effect Runs when component renders
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/")
            .then(res => {
                setProducts(res.data);
                const filter = res.data.filter((p) => p.price < 20).slice(0, 6)
                console.log(res.data)
                setFiltered_Products(filter)
                console.log(filter)
                setLoading(false);

            })

            .catch(err => {
                console.log("Fetch Error: ", err)
                setError("Failed To Load Products")
                setLoading(false);
            })


    }, [])
    if (Loading) return <p>Loading....</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <div className="flex flex-col pt-[200px] pb-[120px]   items-center justify-center w-full">
                <p className="text-white font-ubuntu">Home/Products</p>
                <p className="text-5xl text-white font-bold font-ubuntu ">PRODUCTS</p>
            </div>
            <div className="bg-white ">
                <div className="flex px-20 py-4 container mx-auto">
                    <aside className="rounded-xl hidden md:block p-4 min-h-[500px] w-74 bg-transparent overflow-y-auto top-5 h-screen sticky mr-5 max-h-[calc(150px)] space-y-4">
                        <h2 className="text-2xl font-bold mb-5 text-black">Top Cheap Products</h2>
                        {Filter_Products.map((product) => (
                            <div key={product.id} className="flex items-center space-x-3 p-2 rounded-lg ">

                                <img src={product.image} alt={product.title} className="w-12 h-12 object-contain" />

                                <div className="flex flex-col">
                                    <p className="text-sm font-medium text-gray-800">   {product.title.length > 22 ? product.title.substring(0, 22) + "..." : product.title}</p>
                                    <p className="text-xs text-black font-semibold">${product.price}</p>
                                </div>
                            </div>
                        ))}
                        <img
                            src="../../../public/ChatGPT Image Jul 26, 2025, 08_50_42 PM.png"
                            alt="New Cloth Technologies"
                            className="w-full mt-6"
                        />
                    </aside>
                    <main className="w-full md:w-3/4 ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {Products.map((products) => (
                                <Product_Card
                                    key={products.id}
                                    title={products.title.length > 30 ? products.title.substring(0, 30) + "...." : products.title}
                                    price={`$ ${products.price}`}
                                    image={products.image}
                                    category={products.category}
                                />
                            ))}

                        </div>
                    </main>
                </div>
                {error}
            </div>
        </div>
    )
}

export default ProductList;