import {useEffect , useState} from "react";
import Product_Card from "./components/product_card";
import axios from 'axios';

function ProductList(){

    const[Products , setProducts] = useState([])
    const[Loading,setLoading] = useState (true)
    const[error,setError]=useState(false)
            //Use Effect Runs when component renders
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/")
            .then(res=>{
            setProducts(res.data);
            console.log(res.data)
            setLoading(false);
        })

        .catch(err=>{
            console.log("Fetch Error: ", err)
            setError("Failed To Load Products")
            setLoading(false);
        })

        },[])
    if(Loading) return <p>Loading....</p>;
    if (error) return <p>{error}</p>;

    return(
        <div>
            <div className="flex flex-col  items-center justify-center h-50 w-full">
                <p className="text-white font-ubuntu">Home/Products</p>
                <p className="text-5xl text-white font-bold font-ubuntu ">PRODUCTS</p>
            </div>
            <div className="bg-white ">
            <div className="flex px-20 py-4 container mx-auto">
                <aside className=" rounded-xl p-4 min-h-[600px] w-74 bg-yellow-300 overflow-y-auto top-5 h-screen sticky mr-5 max-h-[calc(150px)] ">

                </aside>
                <main className="w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {Products.map((products)=>(
                            <Product_Card
                                key={products.id}
                                title={products.title.length > 30 ? products.title.substring(0,30) + "...." : products.title}
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