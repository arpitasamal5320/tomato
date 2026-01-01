import { useState } from 'react';
import { assets } from '../../assets/assets.js';
import './LoginPopUp.css';

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? null : (
            <input type="text" placeholder="Enter your name" required />
          )}

          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
        </div>

        <button>
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" id="terms" required />
          <p>I agree to the terms and conditions</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;

