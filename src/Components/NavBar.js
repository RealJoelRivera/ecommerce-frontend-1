import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../Redux/UserAction";
const NavBar = props => {
  const handleClick = () => {
    localStorage.clear();
    props.removeUser();
  };
  return (
    <div className="navBar">
      <div className="innerNav">
        <Link to="/">
          <h1>Fashion Fits</h1>
        </Link>
        <Link to="/">
          <p>Shop</p>
        </Link>
        {!props.user.id ? (
          <Link to="/login">
            <p>LogIn</p>
          </Link>
        ) : null}

        {!props.user.id ? (
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
        ) : (
          <p id="signOut" onClick={handleClick}>
            Sign Out
          </p>
        )}
        <Link to="/cart">
          <p>Cart</p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const user = state.user.user;
  return { user };
};

export default connect(
  mapStateToProps,
  { removeUser }
)(NavBar);
