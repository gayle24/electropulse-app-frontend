import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube, FaCcPaypal } from "react-icons/fa";
import { Link } from "react-router-dom";
import Map from "../components/map";
// import {Mpesa} from '../assets/image/mpesa.ico';

function Footer() {
  return (

    <footer className="footer bg-dark contain" >
      <div className="container text-start">
        <div className="row">
          <div className="col-lg-3 col-md-6 ">
            <h5>Need Help?</h5>
            <ul className="list-unstyled help-icons">
              <li className="help-icons">
                <a id="help-icons" href='/help-centre'>Help Center</a>
              </li>
              <li className="help-icons">
                <a id="help-icons" href='/contact-us'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>About</h5>
            <ul className="list-unstyled help-icons">
              <li className="help-icons">
                <a id="help-icons" href='/about-us'>About us</a>
              </li>
              <li className="help-icons">
                <a id="help-icons" href='#'>Terms & conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h5>Payment methods</h5>
            {/* here insert mpesa logo and paypal logo */}
            <a className="pay-icons" href="#">
              <FaCcPaypal className="larger-icon" />
            </a>

          </div>
          
        </div>
      </div>
        <Map className="displayed-map"/>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="social-icons list-unstyled text-start">
                <a className="icons" href="#">
                  <FaInstagram className="larger-icon" />
                </a>
                <a className="icons" href="#">
                  <FaWhatsapp className="larger-icon" />
                </a>
                <a className="icons" href="#">
                  <FaLinkedin className="larger-icon" />
                </a>
                <a className="icons" href="#">
                  <FaYoutube className="larger-icon" />
                </a>
                <Link to="/sell-on-electropulse" className="btn btn-warning button-sell">
                  Sell on Electro<span>Pulse</span>
                </Link>
               

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container line-space">

      </div>

    </footer>
  );
}

export default Footer;
