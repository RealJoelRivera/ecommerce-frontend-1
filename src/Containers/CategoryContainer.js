import React from "react";
import { connect } from "react-redux";
import Category from "../Components/Category";

const CategoryContainer = props => {
  return (
    <div className="categoryContainer">
      <p>Category Container</p>

      {/* For each category, render out a card */}
      {props.clotheCategories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

// clothes are coming from index.js inside of the combineReducers function because I named it that
const mapStateToProps = ({ clothes }) => {
  // clotheCategories is the key that I made up right here on the spot and I access this via the props - for ex: props.clotheCategories
  // clothes.categories is coming from the clothesReducer as state. .categories is a key.
  return { clotheCategories: clothes.categories };
};

export default connect(mapStateToProps)(CategoryContainer);
