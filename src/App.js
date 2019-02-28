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
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={LogIn} />
          <Route
            path="/category/:category_id/clothes/:product_id"
            component={ItemDisplayContainer}
          />
          <Route path="/cart" component={Cart} />
          <Route path="/category/:id" exact component={ClothesContainer} />
          <Route path="/" exact component={CategoryContainer} />
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
