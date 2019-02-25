import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../Components/Product";

class ClothesContainer extends Component {
  render() {
    const products = this.props.clothingCategory.products.map(product => (
      <Product
        product={product}
        key={product.id}
        clothingCategoryId={this.props.clothingCategory.id}
      />
    ));

    return (
      <div className="clothesContainer">
        <p>{this.props.clothingCategory.name}</p>
        <div>{products}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let urlID = ownProps.match.params.id;
  const clothingCategory = state.clothes.categories.find(
    category => category.id === parseInt(urlID)
  ) || { products: [] };

  return { clothingCategory };
};

export default connect(mapStateToProps)(ClothesContainer);
