import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../Components/Product";

class ClothesContainer extends Component {
  render() {
    console.log(this.props.clothingCategory.products);
    const products = this.props.clothingCategory.products.map(product => (
      <Product product={product} key={product.id} />
    ));
    return (
      <div>
        <p>{this.props.clothingCategory.name}</p>
        <div>{products}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const clothingCategory = state.clothes.categories.find(
    category => category.id === parseInt(ownProps.match.params.id)
  ) || { products: [] };

  return { clothingCategory };
};

export default connect(mapStateToProps)(ClothesContainer);
