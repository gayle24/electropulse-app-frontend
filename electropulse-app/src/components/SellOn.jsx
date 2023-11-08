import React, { useState } from "react";
import Image from "../assets/image/sell.jpg";
import AdminLogin from "../components/admin/Login";


const SellOn = () => {
    return (
        <section className="sell-on-section">
            <div className="logo-container">
                <img src={Image} alt="Sell on ElectroPulse" />
            </div>
            <div className="text-container">
                <h2 className="sell-text">Do you want to sell and make money on ElectroPulse?</h2>
                <a className="sell-button" href="/Admin-auth-signup">
                    <span>Start </span>
                </a>
            </div>
       </section>
    );
};
    
export default SellOn;
