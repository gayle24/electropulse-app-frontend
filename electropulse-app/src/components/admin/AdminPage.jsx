import React from 'react';
import { Link } from 'react-router-dom';
import image from '../admin/images/user-circle-solid-24.png';

const AdminPage = () => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    

    return (
        <div className="wrapper">
            {/* Top menu */}
            <div className="sidebar">
                {/* Profile image & text */}
                <div className="profile">
                    <img
                        src={image}
                        alt="profile_picture"
                    />
                    <h3>Hello,</h3>
                    <p>{loggedInUser ? `${loggedInUser}` : 'Account'} </p>
                    <ul>
                        <li>
                            <Link to="/admin" className="active">
                                <span className="icon">
                                    <i className="fas fa-home"></i>
                                </span>
                                <span className="item">Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/insights">
                                <span className="icon">
                                    <i className="fas fa-desktop"></i>
                                </span>
                                <span className="item">
                                    View Insights
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/sell-products">
                                <span className="icon">
                                    <i className="fas fa-desktop"></i>
                                </span>
                                <span className="item">
                                    Sell Products
                                </span>
                            </Link>
                        </li>
                        <li>
                            <a href="/dashboard" >
                                <span className="icon-a">
                                    <i className="fas fa-tachometer-alt"></i>
                                </span>
                                <span className="item">Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Menu item */}
            </div>
            <div className="red">
                THis is the admin dash
            </div>
        </div>
    );
};

export default AdminPage;
