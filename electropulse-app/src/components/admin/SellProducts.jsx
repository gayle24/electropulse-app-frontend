import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../admin/images/user-circle-solid-24.png';
import EditProduct from './EditProduct';

const SellProducts = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        brand: '',
        image_url: '',
        quantity: '',
    });

    const [error, setError] = useState('');
    const [adminProducts, setAdminProducts] = useState([]);

    const [isEditing, setIsEditing] = useState(false);
    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        // Fetch the products added by the admin user here
        fetch(`http://127.0.0.1:5555/products?admin=${loggedInUser}`)
            .then((response) => response.json())
            .then((data) => {
                setAdminProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching admin products:', error);
            });
    }, [loggedInUser]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddProduct = () => {
        fetch('http://127.0.0.1:5555/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Product added successfully');
                    setFormData({
                        name: '',
                        price: '',
                        description: '',
                        category: '',
                        brand: '',
                        image_url: '',
                        quantity: '',
                    });
                } else {
                    response.text().then(text => {
                        console.error('Server Error:', text);
                        setError('Failed to add product');
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setError('An error occurred while adding the product');
            });
    };
    const handleDeleteProduct = (productId) => {
        // Send a DELETE request to your server to delete the product
        fetch(`http://127.0.0.1:5555/products/${productId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    // If the delete request is successful, update the adminProducts array
                    setAdminProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
                } else {
                    // Handle any errors or display an error message
                    console.error('Failed to delete product');
                }
            })
            .catch((error) => {
                // Handle any network errors or request failures
                console.error('Error deleting product:', error);
            });
    };
    const handleEditClick = (product) => {
        setIsEditing(true);
        setEditProduct(product);
    };

    const handleEditClose = () => {
        setIsEditing(false);
        setEditProduct(null);
    };
    const updateAdminProducts = (updatedProduct) => {
        // Find the index of the product to update in the adminProducts array
        const productIndex = adminProducts.findIndex((product) => product.id === updatedProduct.id);

        // Create a new array with the updated product
        const updatedAdminProducts = [...adminProducts];
        updatedAdminProducts[productIndex] = updatedProduct;

        // Update the state with the new array
        setAdminProducts(updatedAdminProducts);
    };



    return (
        <div className="wrapper">
            <div className="sidebar">
                <div className="profile">
                    <img
                        src={image}
                        alt="profile_picture"
                    />
                    <h3>Hello,</h3>
                    <p>{loggedInUser ? `${loggedInUser}` : 'Account'} </p>
                    <ul>
                        <li>
                            <Link to="/dashboard" className="active">
                                <span className="icon">
                                    <i className="fas fa-home"></i>
                                </span>
                                <span className="item">Dashboard</span>
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

                    </ul>
                </div>
                <div className='display-products'>
                    <h2>My Products</h2>
                    <div className="product-container">
                        {adminProducts.map((product) => (
                            <div key={product.id} className="product-item">
                                <div className="product-card">
                                    <img src={product.image_url} alt={product.name} />
                                    <h5 >{product.name}</h5>
                                    <p>Price: ${product.price}</p>
                                    {/* <p>Description: {product.description}</p>*/}
                                    <p>Category: {product.category}</p>
                                    <p>Brand: {product.brand}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <div className="card-buttons">
                                        <button className="edit-button" onClick={() => handleEditClick(product)}>Edit</button>
                                        <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {isEditing && (
                    <EditProduct
                        product={editProduct}
                        onUpdateProduct={updateAdminProducts}
                        onClose={handleEditClose}
                    />
                )}
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

            <div className="modal fade" id="formModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="formModalLabel">Add Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control1 address-fm1"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="price"
                                        className="form-control1 address-fm1"
                                        placeholder="Price"
                                        value={formData.price}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="description"
                                        className="form-control1 address-fm1"
                                        placeholder="Description"
                                        value={formData.description}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="category"
                                        className="form-control1 address-fm1"
                                        placeholder="Category"
                                        value={formData.category}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="brand"
                                        className="form-control1 address-fm1"
                                        placeholder="Brand"
                                        value={formData.brand}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="image_url"
                                        className="form-control1 address-fm1"
                                        placeholder="Image URL"
                                        value={formData.image_url}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="number"
                                        name="quantity"
                                        className="form-control1 address-fm1"
                                        placeholder="Quantity"
                                        value={formData.quantity}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input address-fm1" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Confirm</label>
                                </div>
                                <button type="button" className="btn btn-outline-warning btn-sm my-3 fs-5" onClick={handleAddProduct}>
                                    Add
                                </button>
                            </form>
                            {error && <p className="error-message">{error}</p>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SellProducts;
