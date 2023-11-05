import React, { useState } from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = () => {
        const userData = { username, email, contact,address, password, confirmPassword };

        fetch('http://127.0.0.1:5555/adminsignup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.ok) {
                    window.location.href = '/admin-auth-login';
                } else {
                    setError('Signup failed. Please check your details.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setError('An error occurred during signup.');
            });
    };

    return (
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
                                <input
                                    type="text"
                                    className="form-control-login"
                                    id="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="email"
                                    className="form-control-login"
                                    id="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    className="form-control-login"
                                    id="phone"
                                    placeholder="Enter phone number"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    className="form-control-login"
                                    id="address"
                                    placeholder="Enter address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <input
                                    type="password"
                                    className="form-control-login"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="password"
                                    className="form-control-login"
                                    id="confirm-password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                                id="signup1-button"
                                onClick={handleSignup}
                            >
                                Sign Up
                            </button>
                            <div className="d-flex justify-content-center mt-3">
                                <p>
                                    Already have an admin account?{' '}
                                    <a className="signup-link" href="/admin-auth-login">
                                        Login
                                    </a>
                                </p>
                            </div>
                            {error && <p>{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
