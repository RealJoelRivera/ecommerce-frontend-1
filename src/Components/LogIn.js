import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogIn } from "../Redux/UserAction";

class LogIn extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

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
    this.props.userLogIn(user);
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>LogIn</h3>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Full Name"
          value={this.state.user}
          name="name"
        />
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
  { userLogIn }
)(LogIn);
