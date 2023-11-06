


const Payment = () => {
    return(
        <>
            <div className="container bg-p mt-5 "> 
                
               
               
                <div className=" bg-white border border-warning-subtle border border-2 rounded-4 fs-5 shadow-lg">
                    
                    <div className="bg-warning text-center rounded-top-4">
                        <h3 className="py-3">Payment Methods</h3>
                    </div>
                    <div className="container-sm d-flex flex-column flex-sm-row justify-content-around my-5">
                        <h4 className="mx-3 fs-4">Address for delivery</h4>
                        
                        <button
                        type="button"
                        className="btn btn-outline-warning btn-sm my-3 fs-5"
                        data-bs-toggle="modal"
                        data-bs-target="#formModal"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-plus-lg"
                            viewBox="0 0 16 16"
                        >
                            <path
                            fillRule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                            />
                        </svg>
                        Add Address
                        </button>
                    </div>


                    {/* form Modal  */}
                    <div className="modal fade" id="formModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="formModalLabel">Add Address</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                                {/*  address form */}
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                                                <input type="text" className="form-control address-fm" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Email address</label>
                                            <input type="text" className="form-control address-fm" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Phone No</label>
                                            <input type="number" className="form-control address-fm" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">County</label>
                                            <input type="text" className="form-control address-fm" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Pysical Address</label>
                                            <input type="text" className="form-control address-fm" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input address-fm " id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Confirm</label>
                                        </div>
                                    <button type="submit" className=" btn btn-outline-warning btn-sm my-3 fs-5">Submit</button>
                                    </form>
                                </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-outline-warning btn-sm my-3 fs-5" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-outline-warning btn-sm my-3 fs-5">Save Address</button>
                            </div> */}
                        </div>
                        </div>
                    </div>

                    <div className=" d-flex justify-content-center align-items-center my-4">
                    <button type="button" className="btn btn-outline-warning fs-5">                   
                        M-pesa
                    </button>
                    <button type="button" className="btn btn-outline-warning mx-5 fs-5">                    
                        paypal
                    </button>  
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="border border-warning-subtle rounded-3 text-dark p-2 w-75">
                            <p className="mx-3">Confirm Phone No. then click 'Place Order' to generate payment request to your phone.</p>
                            <p className="mx-3">Enter your MPESA PIN on prompt pop-up on your phone to complete the payment.</p>
                        </div>
                    </div>

                    <div className="container-sm my-5 d-flex justify-content-center align-items-center">
                        <div className="">
                        <label htmlFor="" className="form-label text-dark mx-5">M-pesa no:</label>
                        <input type="text" className=" mx-5 border border-warning border-2 rounded-2 mx-5 fs-5" placeholder="0712345678" id="phone-num"/>
                        </div>
                    </div>

                    <div className="container-sm d-flex flex-column flex-sm-row justify-content-around ">
                        <p className="my-3 fs-5">Total Ksh: </p>
                        <button type="button" className="btn btn-outline-warning btn-sm my-3 fs-5">
                            Place Order
                        </button>
                    </div>
 
                </div>

            </div>    
        </>
    )
}       

export default Payment