import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { userLogIn, userSignUp } from "../Redux/UserAction";
import { Link } from "react-router-dom";

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
    return (
      <div className="login-form">
        <style>
          {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
      `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            {/* <Image src="/logo.png" />  */}
            {this.isLogIn() ? (
              <Header as="h2" color="blue" textAlign="center">
                Login to your account
              </Header>
            ) : (
              <Header as="h2" color="blue" textAlign="center">
                Sign Up for your account
              </Header>
            )}

            <Form size="large">
              <Segment stacked>
                {this.isLogIn() ? null : (
                  <Form.Input
                    onChange={this.handleChange}
                    value={this.state.user}
                    type="text"
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Full Name"
                    name="name"
                  />
                )}
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.email}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail Address"
                  type="text"
                  name="email"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.password}
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
                {this.isLogIn() ? (
                  <Button
                    onClick={this.handleSubmit}
                    color="blue"
                    fluid
                    size="large"
                  >
                    Login
                  </Button>
                ) : (
                  <Button
                    onClick={() => console.log("test")}
                    color="blue"
                    fluid
                    size="large"
                  >
                    Sign Up
                  </Button>
                )}
              </Segment>
            </Form>
            {this.isLogIn() ? (
              <span>
                New to us? <Link to={"/signup"}>Sign Up</Link>
              </span>
            ) : (
              <span>
                Been with us? <Link to={"/login"}>Log In</Link>
              </span>
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(
  null,
  { userLogIn, userSignUp }
)(LogIn);

// <form onSubmit={this.handleSubmit}>
//   <h3>{this.isLogIn() ? "Log In" : "Sign Up"}</h3>
//   {this.isLogIn() ? null : (
//     <input
//       onChange={this.handleChange}
//       type="text"
//       placeholder="Full Name"
//       value={this.state.user}
//       name="name"
//     />
//   )}
//   <br />
//   <input
//     onChange={this.handleChange}
//     type="text"
//     placeholder="E-mail address"
//     value={this.state.email}
//     name="email"
//   />
//   <br />
//   <input
//     onChange={this.handleChange}
//     type="text"
//     placeholder="Password"
//     value={this.state.password}
//     name="password"
//   />
//   <br />
//   <input type="submit" />
// </form>
