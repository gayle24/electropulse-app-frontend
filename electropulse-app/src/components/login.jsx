import React from "react";
import Logo from "../assets/image/Electronic- images/logo.png"


const Login = () => {
    return (
        <section className="login-page">
            <div className="d-flex justify-content-center align-items-center">
                <div className="card custom-card">
                    <div className="card-body">
                        <form className="text-center">
                            <div className="mb-4">
                                <img src={"logo-in-here"} alt="Logo" className="logo" />
                            </div>
                            <p className="greet">Welcome</p>
                            <div className="form-group mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Enter email" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <button type="button" className="btn btn-outline-primary" id="login-button">Login</button>
                            <div className="d-flex justify-content-center mt-3">
                                <p>Dont have an account? <a className="signup-link" href="/signup">Signup</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>




    )
}
export default Login