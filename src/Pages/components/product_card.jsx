import { useCart } from "./Context";

function Product_Card({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="bg-white w-full h-[390px] flex flex-col">
            {/* Image */}
            <img
                className="hover:scale-115 transition-transform duration-400 h-48 w-full object-contain mb-8 mt-10"
                src={product.image}
                alt={product.title}
            />

            {/* Title + Category */}
            <div>
                <p className="mt-2 ml-5 font-semibold text-md">
                    {product.title.length > 30 ? product.title.substring(0, 30) + "..." : product.title}
                </p>
                <p className="mt-2 ml-5 text-sm">{product.category}</p>
            </div>

            {/* Price + Add to Cart */}
            <div className="justify-between items-center ml-3 mt-4">
                <span className="text-lg font-bold text-green-600">${product.price}</span>
                {/* <br /> */}
                <button className="bg-black cursor-pointer  text-white w-40 py-2 mt-2 ml-2 text-sm font-medium hover:bg-gray-800 transition" onClick={() => addToCart(product)}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default Product_Card;


// {product ye sird items deta ahi usage : product.title}
// (product ye poora product de deta hai : product.product.title)