import React from 'react';
import { Link } from 'react-router-dom';
import image from '../admin/images/user-circle-solid-24.png';

const SellProducts = () => {
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
                <button
                    type="button"
                    className="btn btn-outline-warning btn-sm my-3 fs-5 product-button"
                    data-bs-toggle="modal"
                    data-bs-target="#formModal"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="10"
                        fill="currentColor"
                        className="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                        />
                    </svg>
                    Add Product
                </button>
            </div>


            {/* form Modal  */}
            <div className="modal fade" id="formModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="formModalLabel">Add Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {/*  address form */}
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control1 address-fm1" id="exampleInputPassword1" placeholder='Name' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control1 address-fm1" id="exampleInputPassword1" placeholder='Price' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control1 address-fm1" id="exampleInputPassword1" placeholder='Description' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control1 address-fm1" id="exampleInputPassword1" placeholder='category' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control1 address-fm1" id="exampleInputPassword1" placeholder='Brand' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control1 address-fm1" id="exampleInputPassword1" placeholder='Image_url' />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control1 address-fm1" id="exampleInputPassword1" placeholder='Quantity' />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input address-fm1 " id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Confirm</label>
                                </div>
                                <button type="submit" className=" btn btn-outline-warning btn-sm my-3 fs-5">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellProducts;
