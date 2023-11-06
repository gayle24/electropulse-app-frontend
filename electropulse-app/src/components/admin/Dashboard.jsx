import React from 'react';
import { Link } from 'react-router-dom';
import image from '../admin/images/user-circle-solid-24.png';

const Dashboard = () => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
    }

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
                            <a href="/" onClick={handleLogout}>
                                <span className="icon-a">
                                    <i className="fas fa-tachometer-alt"></i>
                                </span>
                                <span className="item">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Menu item */}
            </div>
            <div className='red'>
                <div className="dash-text">
                    {loggedInUser ? `Welcome to your admin dashboard, ${loggedInUser}` : 'Account'}

                  
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
