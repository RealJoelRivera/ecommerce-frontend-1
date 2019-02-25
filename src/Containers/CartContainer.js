import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../Components/CartItem";

class Cart extends Component {
  render() {
    const cartItems = this.props.items.map((item, index) => (
      <CartItem item={item} key={index} />
    ));
    return (
      <div>
        <h1>Cart</h1>
        {cartItems}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const items = state.user.cart;
  console.log(items);
  return { items };
};

export default connect(mapStateToProps)(Cart);
