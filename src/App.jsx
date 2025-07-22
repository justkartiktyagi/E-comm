

// import {Route, Routes} from "react-router-dom";
import {Route , Routes } from 'react-router-dom';
import Navbar from "./Pages/components/Navbar.jsx";
import Home from './Pages/home.jsx';
import ProductList from "./Pages/product_list.jsx";
import Footer from "./Pages/components/Footer.jsx";
import Product_Card from "./Pages/components/product_card.jsx";
function App() {


  return (
    <>

            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/product_list' element={<ProductList/>}/>
                <Route path='/product_card' element={<Product_Card/>}/>
            </Routes>
        <Footer />

    </>
  )
}

export default App
