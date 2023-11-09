import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cartItems.forEach((item) => (ans += item.price * item.quantity));
    setPrice(ans);
  };
  const handleRemove = (id) => {
    const arr = cartItems.filter((item) => item.id !== id);
    setCartItems(arr);
    handlePrice(); // Update total price after removing item from cart
  };
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="d-flex flex-wrap ">
          {cartItems.map((cartItem) => (
            <div className="col" key={cartItem.id}>
              <div className="card border border-success shadow p-3 mb-5 bg-body rounded">
                <img src={cartItem.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">{cartItem.brand}</p>
                  <p className="card-title">{cartItem.name}</p>
                  <p className="card-text">Quantity: {cartItem.quantity}</p>
                  <p className="card-text">Price: Ksh {cartItem.price * cartItem.quantity}</p>

                  {/*  Update total price after removing item */}
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {
                      handleRemove(cartItem.id);
                      handlePrice();
                    }}
                  >
                    Remove
                  </button>
                  <div>

                    {/* Update total price after decrementing quantity */}
                    <button
                      className='w-25'
                      onClick={() => {
                        cartItem.quantity -= 1;
                        handlePrice();
                      }}
                    >
                      -
                    </button>

                    {/* dislpaly the quantity */}
                    <button className='w-25'>{cartItem.quantity}</button>

                    {/*  Update total price after incrementing quantity */}
                    <button
                      className='w-25'
                      onClick={() => {
                        cartItem.quantity += 1;
                        handlePrice();
                      }}
                    >
                      +
                    </button>
                    <button className='bg-warning w-25'>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            <h4>Total Price: Ksh {price}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
