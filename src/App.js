import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchClothes } from "./Redux/ClothesAction";
import { Switch, Route, withRouter } from "react-router-dom";
import CategoryContainer from "./Containers/CategoryContainer";
import NavBarContainer from "./Containers/NavBarContainer";
import ClothesContainer from "./Containers/ClothesContainer";

class App extends Component {
  componentDidMount() {
    this.props.fetchClothes();
  }

  render() {
    return (
      <div className="App">
        <NavBarContainer />
        <Switch>
          <Route path="/cart" render={() => <p>Cart</p>} />
          <Route
            path="/category/:id"
            render={routerProps => <ClothesContainer {...routerProps} />}
          />
          <Route path="/" exact render={() => <CategoryContainer />} />
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
