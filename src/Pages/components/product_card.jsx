import { useCart } from "./Context";

function Product_Card({ product }) {
    const { addToCart } = useCart();

    return (
       
        <div className="bg-white w-full flex flex-col rounded-xl overflow-hidden">
            <div className="w-full aspect-[3/4] flex items-center justify-center">
                <img className="object-contain w-full h-full p-8 hover:scale-125 transition-transform duration-300" src={product.image} alt={product.title}/>
            </div>

            <div className="flex flex-col p-4 flex-grow">
                <p className="font-semibold text-md">{product.title.length > 30 ? product.title.substring(0, 30) + "..." : product.title}</p>
                <p className="text-sm text-gray-600">{product.category}</p>
            </div>

            <div className="flex justify-between items-center p-4 mt-auto">
                <span className="text-lg font-bold text-green-600">${product.price}</span>
                <button className="bg-blue-400 cursor-pointer text-white px-4 py-2 text-sm  rounded font-bold hover:bg-white hover:text-black transition duration-300" onClick={() => addToCart(product)}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default Product_Card;


// {product ye sird items deta ahi usage : product.title}
// (product ye poora product de deta hai : product.product.title)