import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubscribe = () => {
        const userEmail = { email }

        fetch('http://127.0.0.1:5555/newsletters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userEmail),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Subcription sent successfully')
                } else {
                    setError('Subscription failed')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setError('An error occurred during subscription.');
            });

    };

    return (
        <section className="mt-4 custom-section">
            <div className="container-fluid d-flex justify-content-around" id="custom-section">
                <div className="custom-logo">
                    <Link to="/" className="navbar-brand">
                        <span className="shop-icon">electro<span>Pulse</span></span>
                    </Link>
                </div>
                <div>
                    <p className="h4">New to ElectroPulse?</p>
                    <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                    <div className="input-group">
                        <input
                            type="email"
                            className="form-control2"
                            id="news-form"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            id="custom-button"
                            className="btn btn-warning"
                            type="button"
                            onClick={handleSubscribe}
                        >
                            Subscribe
                        </button>
            {error && <p className='error-message'>{error}</p>}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Newsletter;
