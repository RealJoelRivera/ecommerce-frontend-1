import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    return (
      <Link
        to={`/category/${this.props.clothingCategoryId}/clothes/${
          this.props.product.id
        }`}
      >
        <div className="product">
          <h2>{this.props.product.name}</h2>
          <h6>{this.props.product.description}</h6>
          <h4>{this.props.product.price}</h4>
        </div>
      </Link>
    );
  }
}

export default Product;
