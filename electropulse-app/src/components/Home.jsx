import React from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Image from '../assets/image/background.jpeg';
import Cards from './home_comp/Cards';
import Brand from './home_comp/Brand';
import CartBuy from './home_comp/CartBuy';
import { FaWallet, FaQuestionCircle } from 'react-icons/fa';



const Home = () => {

    return (

        <>
            {/*  */}
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


            {/* brand */}
            <section>
                <Brand />
            </section>

            {/* viewed cards */}
            <section className="viewed cards">

                <CartBuy />
            </section>

            {/* cards */}
            <section className="cards">
                <Cards />
            </section>

            <Newsletter />
            <Footer />
        </>
    )
}
export default Home;