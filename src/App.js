import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchClothes } from "./Redux/ClothesAction";

class App extends Component {
  componentDidMount() {
    this.props.fetchClothes();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <p>Hello</p>
      </div>
    );
  }
}

const mapStateToProps = ({ clothes }) => {
  return { clothes: clothes.categories };
};

export default connect(
  mapStateToProps,
  { fetchClothes } //mapDispatchToProps
)(App);
