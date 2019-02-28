import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <h1>Fashion Fits</h1>
      </Link>
      <p>Shop</p>
      <p>Collection</p>
      <Link to="/login">LogIn</Link>
      <br />
      <br />
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default NavBar;
