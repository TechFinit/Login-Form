import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Register = () => {
  return (
    <div className="register-box">
      <h1>Create an Account</h1>
      <form>
        <div className="form-group">
          <input type="text" required placeholder="Name" />
          <label>Name</label>
        </div>
        <div className="form-group">
          <input type="email" required placeholder="Email ID" />
          <label>Email ID</label>
        </div>
        <div className="form-group">
          <input type="password" required placeholder="Password" />
          <label>Password</label>
        </div>
        <button type="submit">Register</button>
        <div className="login-link">
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
