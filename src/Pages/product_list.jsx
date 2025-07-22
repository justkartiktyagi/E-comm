import {useEffect , useState} from "react";
import axios from 'axios';

function ProductList(){

    const[Products , setProducts] = useState([])
    const[Loading,setLoading] = useState (true)
    const[error,setError]=useState(false)
            //Use Effect Runs when component renders
    useEffect(()=>{
        axios
            .get("https://api.escuelajs.co/api/v1/products")
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
            <div className="flex items-center justify-center h-50 w-full">
                <p className="text-3xl text-white font-ubuntu ">This is Product page</p>
            </div>
            <div className="bg-white ">
            <div className="flex px-20 py-4 container mx-auto">
                <aside className="h-200 w-110 bg-yellow-300">

                </aside>
                <main className="h-200 w-200 ml-10 bg-red-600">

                </main>
            </div>
            </div>
        </div>
    )
}

export default ProductList;