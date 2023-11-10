import React from 'react';
import { Link } from "react-router-dom";

const Cart = ({ cartItems, handleRemove, price, handlePrice }) => {
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="d-flex flex-wrap">
          {cartItems.map((cartItem) => (
            <div className="col-md-4 mb-4" key={cartItem.id}>
              <div className="card border border-success shadow p-3 mb-5 bg-body rounded">
                <img src={cartItem.image_url} className="card-img-top" alt="Product" />
                <div className="card-body">
                  <p className="card-text">{cartItem.brand}</p>
                  <p className="card-title">{cartItem.name}</p>
                  <p className="card-text">Quantity: {cartItem.quantity}</p>
                  <p className="card-text">Price: Ksh {cartItem.price * cartItem.quantity}</p>

                  <div className="btn-group">
                    {/* Decrement quantity */}
                    <button
                      className='btn btn-outline-secondary'
                      onClick={() => {
                        if (cartItem.quantity > 1) {
                          cartItem.quantity -= 1;
                          handlePrice();
                        }
                      }}
                    >
                      -
                    </button>

                    {/* Display the quantity */}
                    <button className='btn btn-outline-secondary'>{cartItem.quantity}</button>

                    {/* Increment quantity */}
                    <button
                      className='btn btn-outline-secondary'
                      onClick={() => {
                        cartItem.quantity += 1;
                        handlePrice();
                      }}
                    >
                      +
                    </button>

                    {/* Remove item */}
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        handleRemove(cartItem.id);
                        handlePrice();
                      }}
                    >
                      Remove
                    </button>
                  </div>

                  {/* Buy Now button */}
                  <Link to="/payment" target="_blank">
                    <button className='btn btn-warning mt-2 w-100'>Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12">
            <h4>Total Price: Ksh {price}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
