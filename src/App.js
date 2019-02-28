import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchClothes } from "./Redux/ClothesAction";
import { Switch, Route, withRouter } from "react-router-dom";
import CategoryContainer from "./Containers/CategoryContainer";
import NavBarContainer from "./Containers/NavBarContainer";
import ClothesContainer from "./Containers/ClothesContainer";
import ItemDisplayContainer from "./Containers/ItemDisplayContainer";
import Cart from "./Containers/CartContainer";
import LogIn from "./Components/LogIn";

class App extends Component {
  componentDidMount() {
    this.props.fetchClothes();
  }

  render() {
    return (
      <div className="App">
        <NavBarContainer />

        <Switch>
          <Route
            path="/login"
            render={routerProps => <LogIn {...routerProps} />}
          />
          <Route
            path="/category/:category_id/clothes/:product_id"
            render={routerProps => <ItemDisplayContainer {...routerProps} />}
          />
          <Route path="/cart" render={() => <Cart />} />
          <Route
            path="/category/:id"
            exact
            render={routerProps => <ClothesContainer {...routerProps} />}
          />
          <Route path="/" exact render={() => <CategoryContainer />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { fetchClothes } //mapDispatchToProps
  )(App)
);
