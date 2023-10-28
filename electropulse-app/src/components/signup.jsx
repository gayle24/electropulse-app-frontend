import React from 'react';


const Signup = () => {
    return(
        <section className="signup-page">
            <div className="d-flex justify-content-center align-items-center">
                <div className="card custom-card custom-card-size">
                    <div className="card-body">
                        <form className="text-center">
                            <div className="mb-4">
                                <img src={"logo-in-here"} alt="Logo" className="logo" />
                            </div>
                            <p className="greet">Welcome</p>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" id="username" placeholder="Username" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Enter email" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password" />
                            </div>
                            <button type="button" className="btn btn-outline-primary" id="signup-button">Sign Up</button>
                            <div className="d-flex justify-content-center mt-3">
                                <p>Already have an account? <a className="signup-link" href="/login">Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}
export default Signup