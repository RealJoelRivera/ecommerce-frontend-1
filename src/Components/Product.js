import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    return (
      <div className="category">
        <Link
          to={`/category/${this.props.clothingCategoryId}/clothes/${
            this.props.product.id
          }`}
        >
          <div className="overlay">
            <h2>{this.props.product.name}</h2>
            <h6> {this.props.product.description} </h6>
            <h4> ${this.props.product.price} </h4>
          </div>
          <img alt="" src={this.props.product.img} />
        </Link>
      </div>
    );
  }
}

export default Product;
