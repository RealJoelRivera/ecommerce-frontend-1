import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { clearCart } from "../Redux/UserAction";

class Cart extends Component {
  render() {
    const cartItems = this.props.items.map((item, index) => (
      <CartItem item={item} key={index} />
    ));
    return (
      <div class="cart">
        <h1>Cart</h1>
        {cartItems}
        {/* <Link to="/"> */}
        <button
          id="checkout"
          onClick={() => this.props.clearCart(this.props.items)}
        >
          One Click Checkout
        </button>
        {/* </Link> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const items = state.user.cart;
  return { items };
};

export default connect(
  mapStateToProps,
  { clearCart }
)(Cart);
