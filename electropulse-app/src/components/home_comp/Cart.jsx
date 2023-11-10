import React from 'react';
import { Link } from "react-router-dom";

const Cart = ({ cartItems, handleRemove, price, handlePrice }) => {
  return (
    <div className="container">
      {/* <h2>Shopping Cart</h2> */}
      {cartItems.length === 0 ? (
        <p></p>
      ) : (
        <div className="d-flex flex-wrap">
          {cartItems.map((cartItem) => (
            <div className="col-md-4 mb-4 cart-item" key={cartItem.id}>
              <div className="card border border-success shadow p-3 mb-5 bg-body rounded " style={{width: '7cm', height: '90%'}}>
                <img src={cartItem.image_url} className="card-img-top" alt="Product" />
                <div className="card-body">
                  <p className="card-text">{cartItem.brand}</p>
                  <p className="card-title">{cartItem.name}</p>
                  <p className="card-text">Quantity: {cartItem.quantity}</p>
                  <p className="card-text">Price: Ksh {cartItem.price * cartItem.quantity}</p>

                  

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




// increment and decrementing
 
