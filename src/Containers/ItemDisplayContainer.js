import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../Redux/UserAction";

class ItemDisplayContainer extends Component {
  render() {
    return (
      <div className="itemDisplayContainer">
        {this.props.item ? <img alt={this.props.item.description} src={this.props.item.img} /> : null}
        <h1>{this.props.item.name}</h1>
        <h3>{this.props.item.description}</h3>
        <h3>{this.props.item.price}</h3>
        {!!this.props.item.id ? (
          <button onClick={() => this.props.addToCart(this.props.item)}>
            Add To Cart
          </button>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state, componentsProps) => {
  const category = state.clothes.categories.find(
    category =>
      category.id === parseInt(componentsProps.match.params.category_id)
  ) || { products: [] };
  const item =
    category.products.find(
      product =>
        product.id === parseInt(componentsProps.match.params.product_id)
    ) || {};

  return { item };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(ItemDisplayContainer);
