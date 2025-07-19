function Footer(){
    return(
        <div className="footer bg-gray-100 ">
            <div className=" grid-cols-4 pt-20 pb-40 container justify-center mx-auto flex space-x-50 " >
                <div className=" space-y-2 text-black text-left ">
                    <p className="text-2xl font-ubuntu font-bold">About Us</p>
                <p className="mt-5">Mauris vitae ultricies leo integer malesuada.</p>
                    <p>Odio tempor orci dapibus ultrices in. Egestas diam in arcu </p>
                    <p>cursus euismod.</p>
                    <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                    <p>do eiusmod tempor incididunt.</p>
                </div>

                <div className=" space-y-4 text-black  text-left">
                    <p className="text-2xl font-ubuntu font-bold mb-10">Account</p>
                    <p>My Account</p>
                    <p>My Wishlist</p>
                    <p>My cart</p>
                    <p>Sign in</p>
                    <p>Checkout</p>
                </div>
                <div className=" space-y-4 text-black  text-left">
                    <p className="text-2xl font-ubuntu font-bold mb-10 ">Shipping</p>
                    <p>New Products</p>
                    <p>Best Sellers</p>
                    <p>Manufacturers</p>
                    <p>Suppliers</p>
                    <p>Specials</p>
                </div>
                <div className=" space-y-4 text-black  text-left">
                    <p className="text-2xl font-ubuntu font-bold mb-10 ">Contact us</p>
                    <p>Phone: (+63) 555 1212</p>
                    <p>Fax: (+63) 555 0100</p>
                    <p>New York,</p>
                    <p>96th Street, NY 10129</p>

                </div>
            </div>
            <div className="text-center mt-30 ">
                <p className="text-4xl font-bold font-ubuntu text-black e mb-30">DripCode</p>
                <p className=" font-ubuntu text-black pb-40"> Copyright © 2025 - Mantiss Codes</p>
            </div>
        </div>
    )
}

export default Footer;