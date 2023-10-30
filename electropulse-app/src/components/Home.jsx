import React from 'react';
import Cards from './Cards';
// import Navbar from './Navbar'

// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://kohls.p.rapidapi.com/categories/list',
//   headers: {
//     'X-RapidAPI-Key': 'c355c9c215msh4ab47fb85d1669fp139939jsnbb46094711c3',
//     'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
//   }
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }



const Home = () => {
    return (
        <>
            {/* fake nav bar */}
            <section>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown link
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/login'>Login</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/signup'>Signup</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

            {/* home - body */}
            <section className="home-page opacity-100">
                <div className="container title">
                    <h1 className="f-s-1 text-center opacity-100 ">Electro<span className="text-white">Pulse</span></h1>


                </div>

            </section>
            {/* brand and cards */}
            <section>
                <div className="container">
                    {/* brand gutters */}
                    <div className="container text-center">
                        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                            <div className="col">
                                <div className="p-2">
                                    <img src="/img/Apple.jpg"
                                        className="img-fluid"
                                        alt="Apple Brand"
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="p-2">
                                    <img src="/img/Samsung.png"
                                        className="img-fluid"
                                        alt="Samsung Brand"
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="p-2">
                                    <img src="/img/Oppo.jpg"
                                        className="img-fluid"
                                        alt="Oppo Brand"
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="p-2">
                                    <img src="/img/Xiaomi.png"
                                        className="img-fluid"
                                        alt="Xiaomi Brand"
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="p-2">
                                    <img src="/img/Hisense.jpg"
                                        className="img-fluid"
                                        alt="Hisense Brand"
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="p-2">
                                    <img src="/img/KE_BF22_Multichoice_FL.png"
                                        className="img-fluid"
                                        alt="Vitron Brand"
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="p-2">
                                    <img src="/img/Skyworth.png"
                                        className="img-fluid"
                                        alt="Skyworth Brand"
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="p-2">
                                    <img src="/img/Royal.jpg"
                                        className="img-fluid"
                                        alt="Royal Brand"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* viewed cards */}
            <section className="viewed cards">  

            </section>

            {/* cards */}
            <section className="cards">
                <Cards />
            </section>

        </>
    )
}
export default Home