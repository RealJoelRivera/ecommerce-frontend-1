import React, { Component } from "react";

class Product extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.product.name}</h2>
        <h6>{this.props.product.description}</h6>
        <h4>{this.props.product.price}</h4>
      </div>
    );
  }
}

export default Product;
