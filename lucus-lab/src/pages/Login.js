import React, { Component } from "react";

/** Images Imports */
import Logo from "../assets/img/logo.png";

class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <img className="login-img" src={Logo} alt="Logo" />
        <form className="login-form">
          <div className="login-info">
            <span>Welcome to Lucus Lab</span>
            <span>Please Sign In to Your Account</span>
          </div>
          <div className="form-wrapper">
            <label className="input-label">Email</label>
            <input className="input-field" type="email" />
            <label className="input-label">Password</label>
            <input className="input-field" type="password" />
            <button className="login-btn">Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
