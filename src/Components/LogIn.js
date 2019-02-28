import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogIn, userSignUp } from "../Redux/UserAction";

class LogIn extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  isLogIn = () => this.props.match.path === "/login";

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    if (this.isLogIn()) {
      this.props.userLogIn(user);
    } else {
      this.props.userSignUp(user);
    }
  };

  render() {
    console.log(this.state, this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{this.isLogIn() ? "Log In" : "Sign Up"}</h3>
        {this.isLogIn() ? null : (
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Full Name"
            value={this.state.user}
            name="name"
          />
        )}
        <br />
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="email"
          value={this.state.email}
          name="email"
        />
        <br />
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="password"
          value={this.state.password}
          name="password"
        />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default connect(
  null,
  { userLogIn, userSignUp }
)(LogIn);
