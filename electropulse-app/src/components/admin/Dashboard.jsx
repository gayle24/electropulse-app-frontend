import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
    // State to manage products
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({});

    // Fetch products from your API when the component mounts
    useEffect(() => {
        // Implement fetching products from your backend API
        // Example: fetchProducts() => setProducts([...]);
    }, []);

    // Function to add a new product
    const addProduct = () => {
        // Implement adding a new product to your backend
        // Example: addProduct(newProduct);
    };

    return (
        <div className="admin-dashboard">
            <div className="side-panel">
                <h1>Admin Dashboard</h1>
                
            </div>
            <div className="main-content">
                <h2>Add New Product</h2>
                <input
                    type="text"
                    placeholder="Product Name"
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                {/* Add other input fields for product details */}
                <button onClick={addProduct}>Add Product</button>
                <h2>Product List</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name} - {/* Display other product details */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AdminDashboard;
