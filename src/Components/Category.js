import React, { Component } from "react";
import { Link } from "react-router-dom";

class Category extends Component {
  render() {
    return (
      <div className="category">
        <Link to={`/category/${this.props.category.id}`}>
          <p>{this.props.category.name}</p>
        </Link>
      </div>
    );
  }
}

export default Category;
