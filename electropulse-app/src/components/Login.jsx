import React,{useState} from "react";
import logo from "../assets/image/Screenshot from 2023-10-24 13-46-49.png";


const Login = () => {
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const userData = {username, password};

        fetch('http://127.0.0.1:5555/userlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData, )
        })
            .then((response) => {
                if (response.ok) {
                    localStorage.setItem('loggedInUser', username)
                    window.location.href =  '/';
                } else {
                    setError('Please input valid login credentials');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setError('An error occurred during login.');
            });
    }
    return (
        <section className="login-page">
            <div className="d-flex justify-content-center align-items-center">
                <div className="card custom-card custom-card-size">
                    <div className="card-body">
                        <form className="text-center">
                            <div className="mb-4">
                                <img src={logo} alt="Logo" className="logo" />
                            </div>
                            <p className="greet">Welcome</p>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control-login" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" className="form-control-login" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button type="button" className="btn btn-outline-primary" id="login1-button" onClick={handleLogin}>Login</button>
                            <div className="d-flex justify-content-center mt-3">
                                <p>Dont have an account? <a className="signup-link" href="/signup">Signup</a></p>
                            </div>
                            {error && <p>{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Login