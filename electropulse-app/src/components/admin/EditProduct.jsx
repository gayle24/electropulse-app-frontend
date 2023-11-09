import React, { useState } from 'react';

const EditProduct = ({ product, onUpdateProduct, onClose }) => {
    const [formData, setFormData] = useState(product);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdateProduct = () => {
        // Send a PUT request to update the product on the server
        fetch(`http://127.0.0.1:5555/products/${formData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Product updated successfully');
                    onUpdateProduct(formData); // Update the product in the parent component
                } else {
                    response.text().then((text) => {
                        console.error('Server Error:', text);
                        // Handle error
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error
            });
    };

    return (
        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editModalLabel">Edit Product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
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
                            <button type="button" className="btn btn-outline-warning btn-sm my-3 fs-5" onClick={handleUpdateProduct}>
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
