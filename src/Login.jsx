import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Login = () => {
  return (
    <div className="login-box">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <input type="email" required placeholder="" />
          <label1>Email ID</label1>
        </div>
        <div className="form-group">
          <input type="password" required placeholder="" />
          <label1>Password</label1>
        </div>
        <div className="form-options">
            <label3 htmlFor="rememberMe">
            <input type="checkbox" id="rememberMe" />Remember Me</label3>
            <span className="forgot-password">Forgot Password</span>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <span>
            New Here? <Link to="/register">Create an Account</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
