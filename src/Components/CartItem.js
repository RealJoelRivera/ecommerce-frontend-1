import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../Redux/UserAction";

class CartItem extends Component {
  render() {
    return (
      <div className="cartItem">
        {this.props.item ? <img alt="" src={this.props.item.img} /> : null}
        <p>{this.props.item.name}</p>
        <p>{this.props.item.quantity}</p>
        <button
          className="buttonItem"
          onClick={() => this.props.removeFromCart(this.props.item)}
        >
          Remove {this.props.item.name}
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { removeFromCart }
)(CartItem);
