// import { Prev } from 'react-bootstrap/esm/PageItem';
// import samsung from '/img/SAMSUNG-GALAXY-S23-ULTRA.jpeg';

// import { useState } from 'react';



// const CartBuy = () => {

//     const [quantity, setQuantity] = useState(1)
//     const [amount, setAmount] = useState(200)
//     const [showAlert, setShowAlert] = useState(false);

//     // handle increment

//     const handleIncrement = () => {
//         setQuantity(quantity + 1)
//         setShowAlert(false)
//         setAmount((prevAmount) => prevAmount * quantity );

//     };
  


//     // handle decrement

//     const handleDecrement = () => {
//         if (quantity >1){
//             setQuantity(quantity - 1);
//             setAmount((prevAmount) => prevAmount - amount);

//         }else {
//             setShowAlert(true)
//         };
        
//     };
    
//     return (
//         <div className='container'>
//             <h1>
//                 carts and buy
//             </h1>

//             <div className="card mb-3" style={{ maxWidth: '540px' }}>
//                 <div className="row g-0">
//                     <div className="col-md-4">
//                         <img src={samsung} className="img-fluid rounded-start" alt="Samsung Galaxy" />
//                     </div>
//                     <div className="col-md-8">
//                         <div className="card-body">
//                             <h5 className="card-title">Samsung</h5>
//                             <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                             {/* decrement buttons */}
//                             <div>
//                                 {/* showalert */}
//                                 {showAlert && (
//                                     <div className="alert alert-warning d-flex align-items-center" role="alert">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
//                                         <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
//                                         <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
//                                     </svg>
//                                     <div>
//                                         Quantity can't be less than 1
//                                     </div>
//                                     </div>
//                                 )}
//                             <button type="button" className="btn btn-outline-warning m-3"
//                             onClick={handleDecrement}
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
//                                     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
//                                 </svg>
//                             </button>

//                             {/* count */}

//                             <button type="button" className="btn btn-outline-warning mx-3">{quantity}</button>

//                             {/* increment button */}
//                             <button type="button" className="btn btn-outline-warning m-3"
//                             onClick={handleIncrement}
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
//                                     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
//                                 </svg>
//                             </button>
//                             {/* amount */}
//                             <p>Ksh {amount}</p>
//                             </div>
//                             {/* add to cart and  buy button */}
//                             <div className="justify-content-evenly"> 
//                                 <button type="button" className="btn btn-outline-warning mx-3" id='add-cart'>
//                                     <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
//                                         <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
//                                     </svg></span> 
//                                     Add to cart
//                                 </button>
//                                 <button type="button" className="btn btn-outline-warning mx-3">Buy now</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     )
// }


// export default CartBuy;