import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchClothes } from "./Redux/ClothesAction";
import { Switch, Route, withRouter } from "react-router-dom";
import ClothesContainer from "./Containers/ClothesContainer";
import NavBarContainer from "./Containers/NavBarContainer";

class App extends Component {
  componentDidMount() {
    this.props.fetchClothes();
  }

  render() {
    return (
      <div className="App">
        <NavBarContainer />
        <Switch>
          <Route path="/cart" render={() => <p>Test</p>} />

          <Route path="/" exact render={() => <ClothesContainer />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ clothes }) => {
  return { clothes: clothes.categories };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchClothes } //mapDispatchToProps
  )(App)
);
