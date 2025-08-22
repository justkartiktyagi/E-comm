import { useEffect, useState } from "react";
import Product_Card from "./components/product_card";
import axios from "axios";

function ProductList() {
    const [Products, setProducts] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [Filter_Products, setFiltered_Products] = useState([]);

    // Fetch products
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/")
            .then((res) => {
                setProducts(res.data);

                // filter cheap products
                const filter = res.data.filter((p) => p.price < 20).slice(0, 6);
                setFiltered_Products(filter);

                setLoading(false);
            })
            .catch((err) => {
                console.log("Fetch Error: ", err);
                setError("Failed To Load Products");
                setLoading(false);
            });
    }, []);

    if (Loading) return <p>Loading....</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col pt-[200px] pb-[120px] items-center justify-center w-full">
                <p className="text-white font-ubuntu">Home/Products</p>
                <p className="text-5xl text-white font-bold font-ubuntu">PRODUCTS</p>
            </div>

            {/* Main Section */}
            <div className="bg-white">
                <div className="flex px-20 py-4 pb-20 container mx-auto">
                    {/* Sidebar */}
                    <aside className="rounded-xl hidden md:block p-2 min-h-[500px]  w-74 bg-transparent overflow-y-auto top-5 h-screen sticky mr-5 max-h-[calc(150px)] space-y-4">
                        <h2 className="text-2xl font-bold mb-5 text-black">Top Cheap Products</h2>
                        {Filter_Products.map((product) => (
                            <div key={product.id} className="flex items-center space-x-3 p-2 rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-12 h-12 object-contain"
                                />
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium text-gray-800">
                                        {product.title.length > 22
                                            ? product.title.substring(0, 22) + "..."
                                            : product.title}
                                    </p>
                                    <p className="text-xs text-black font-semibold">${product.price}</p>
                                </div>
                            </div>
                        ))}
                        <div><img className="h-90 w-full " src="../../public/ChatGPT Image Jul 26, 2025, 08_50_42 PM.png" alt="source"/></div>
                    </aside>

                    {/* Product Grid */}
                    <main className="w-full md:w-3/4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {Products.map((product) => (
                                <Product_Card key={product.id} product={product} />
                            ))}
                        </div>
                    </main>
                </div>
                {error}
            </div>
        </div>
    );
}

export default ProductList;
