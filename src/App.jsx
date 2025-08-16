

// import {Route, Routes} from "react-router-dom";
import {Route , Routes } from 'react-router-dom';
import Navbar from "./Pages/components/Navbar.jsx";
import Home from './Pages/home.jsx';
import ProductList from "./Pages/product_list.jsx";
import Footer from "./Pages/components/Footer.jsx";
import Product_Card from "./Pages/components/product_card.jsx";
import Services from './Pages/services.jsx';
import About from './Pages/about.jsx';
import News from './Pages/news.jsx';
import Contact_Us from './Pages/contact_us.jsx';
import Cart from './Pages/cart.jsx';
function App() {


  return (
    <>

            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/product_list' element={<ProductList/>}/>
                <Route path='/product_card' element={<Product_Card/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/contact_us' element={<Contact_Us/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        <Footer />

    </>
  )
}

export default App
