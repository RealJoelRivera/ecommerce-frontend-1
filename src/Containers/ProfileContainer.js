import React, { Component } from "react";
import { connect } from "react-redux";
import Purchase from "../Components/Purchase";
import { Redirect } from "react-router-dom";

class ProfileContainer extends Component {
  state = {};

  render() {
    return (
      <div className="itemDisplayContainer">
        {!!this.props.user.id ? (
          <div>
            Welcome back, {this.props.user.name}.
            {this.props.purchases.map(purchase => {
              return <Purchase purchase={purchase} />;
            })}
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.user);
  const { user, purchases } = state.user;
  return { user, purchases };
};

export default connect(mapStateToProps)(ProfileContainer);
