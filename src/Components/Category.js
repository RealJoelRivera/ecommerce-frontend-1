import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
      <div className="categories">
        <p>{this.props.category.name}</p>
      </div>
    );
  }
}

export default Category;
