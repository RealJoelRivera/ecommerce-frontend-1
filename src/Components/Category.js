import React, { Component } from "react";
import { Link } from "react-router-dom";

class Category extends Component {
  render() {
    return (
      <div className="category">
        <Link to={`/category/${this.props.category.id}`}>
          <div className="overlay">
            <h2>{this.props.category.name}</h2>
          </div>
          <img
            alt={this.props.category.name}
            src={
              this.props.category.products[
                Math.floor(Math.random() * this.props.category.products.length)
              ].img
            }
          />
        </Link>
      </div>
    );
  }
}

export default Category;
