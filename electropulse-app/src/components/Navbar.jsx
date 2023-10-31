import React from "react";
import { Link } from "react-router-dom"; // You can adjust the routing as needed
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa"; // You may need to install the "react-icons" library


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="logo">
        <Link to="/" className="navbar-brand">
          <p className="shop-icon">electro<span>Pulse</span></p>
        </Link>


      </div>
      <div className="nav-details">

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <form className="d-flex">
            <input
              className="form-control me-4"
              type="search"
              placeholder="search products and category"
              aria-label="Search"
            />
            <button id="search-button" className="btn btn-outline-success" type="submit">
              <FaSearch />
            </button>
          </form>
          
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FaUser /> account
                </a>
                <ul id="auth-button" className="dropdown-menu text-center justify-content-center" aria-labelledby="navbarDropdownMenuLink">
                  <a id="login-button" className='nav-link' href='/login'>Login</a>
                  <a id="signup-button" className='nav-link' href='/signup'>Signup</a>
                </ul>
              </li>

            </ul>
          </div>
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <Link to="/cart" className="nav-link" id="cart-button">
                <FaShoppingCart /> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
