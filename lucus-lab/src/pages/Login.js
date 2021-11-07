import React, { Component } from "react";

/** Custom JS Files Imports */
import auth from "../auth";

/** Redux Imports */
import { connect } from "react-redux";
import { loginUser } from "../store/actions";

/** Images Imports */
import Logo from "../assets/img/logo.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      email: "",
      pass: "",
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  login(e) {
    e.preventDefault();
    auth.login(() => {
      this.props.loginUser(
        this.state.email,
        this.state.pass,
        this.props.history
      );
    });
  }

  handleChange(e) {
    const { name, value } = e.target;

    if (name === "email") {
      this.setState({ email: value });
    } else {
      this.setState({ pass: value });
    }
  }

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
            <input
              name="email"
              className="input-field"
              value={this.state.email}
              type="email"
              onChange={this.handleChange}
            />
            <label className="input-label">Password</label>
            <input
              name="password"
              className="input-field"
              value={this.state.pass}
              type="password"
              onChange={this.handleChange}
            />
            {this.props.error && (
              <span className="login-error">{this.props.error.error}</span>
            )}
            <button className="login-btn" onClick={this.login}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { error: state.Login.error };
};

export default connect(mapStateToProps, { loginUser })(Login);
