import { useEffect, useState } from "react";
import Product_Card from "./components/product_card";
import axios from "axios";

function ProductList() {
    const [Products, setProducts] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [Filter_Products, setFiltered_Products] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // 🔍 search state

    // Fetch products
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/")
            .then((res) => {
                setProducts(res.data);

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

    // 🔎 Filter products based on search term
    const filteredProducts = searchTerm
        ? Products.filter((p) =>
            p.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : Products;

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
                <div className="flex px-10 py-4 pb-20 container mx-auto">
                    {/* Sidebar */}
                    <aside className="rounded-xl hidden md:block p-2 min-h-[500px] w-74 overflow-y-auto top-5 h-screen sticky mr-5 max-h-[calc(150px)] space-y-4">
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
                        <div>
                            <img
                                className="h-90 w-full"
                                src="../../public/ChatGPT Image Jul 26, 2025, 08_50_42 PM.png"
                                alt="source"
                            />
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <main className="w-full md:w-3/4">
                        {/* 🔍 Search Bar */}
                        <div className="flex justify-center mb-6">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Products */}
                        <div
                            className="grid 
                                grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                                gap-x-8 gap-y-12"
                        >
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <Product_Card key={product.id} product={product} />
                                ))
                            ) : (
                                <p className="col-span-full text-center text-gray-500">
                                    No products found
                                </p>
                            )}
                        </div>
                    </main>
                </div>
                {error}
            </div>
        </div>
    );
}

export default ProductList;