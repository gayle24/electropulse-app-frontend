import React, {useState} from "react";
import { Link } from "react-router-dom"; 
import Axios from 'axios';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const subscribe = async () => {
        try {
            const response = await Axios.post('/api/subscribe', { email });

            if (response.status === 200) {
                alert('Subscription successful!');
            }
        } catch (error) {
            console.error('Error subscribing:', error);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        subscribe();
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
                    <form className="mt-3 mb-3" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="email" className="form-control" id="news-form" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
                            <button id="custom-button" className="btn btn-warning" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}
export default Newsletter;