import React from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Image from '../assets/image/background.jpeg';
import Cards from './home_comp/Cards';
import ProductsContainer from './home_comp/ProductsContainer';
import Brand from './home_comp/Brand';
import Cart from './home_comp/Cart';
import { CartProvider } from 'react-use-cart';

import Cart from './home_comp/Cart'

// import CartBuy from './home_comp/CartBuy';
import { FaWallet, FaQuestionCircle } from 'react-icons/fa';
import log from "../assets/image/Screenshot from 2023-10-24 13-46-49.png"



const Home = () => {

    return (

        <>
            
            <Navbar />

            {/* home - body */}
            <section className="home-page">

                <div id="carouselExampleSlidesOnly" className="carousel slide text-center" data-bs-ride="carousel" data-interval="100">
                    <div className="carousel-inner justify-content-center">
                        <div className="carousel-item active">
                            <img src={Image} className="" alt="first slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Image} className="" alt="second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Image} className="" alt="third slide" />
                        </div>
                    </div>
                </div>

            </section>
     
            <Brand />

           

            {/* cards */}
            <section className="cards">
                <div className='container'>
                    <marquee behavior="" direction="">
                        <img src={log} alt="" />
                        {/* <span><h1>eddgdhfdjgg</h1></span> */}
                    </marquee>
                </div>
                
            </section>
            
            {/* <Cart/>
            <CartProvider>
                <>
                    <Cards />
                </>
            </CartProvider> */}
            <ProductsContainer />
          
            <Newsletter />
            <Footer />
        </>
    )
}
export default Home;