import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <h1>Fashion Fits</h1>
      </Link>
      <Link to="/">
        <p>Shop</p>
      </Link>
      <Link to="/">
        <p>Collection</p>
      </Link>
      <Link to="/login">
        <p>LogIn</p>
      </Link>
      <Link to="/signup">
        <p>Sign Up</p>
      </Link>
      <Link to="/cart">
        <p>Cart</p>
      </Link>
    </div>
  );
};

export default NavBar;
