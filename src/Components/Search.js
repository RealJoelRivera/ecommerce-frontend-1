import React from "react";
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <div>
      <div className="search">
        <Link to="/profile">
          <h2>FASHION FITS</h2>
        </Link>
        <input type="text" placeholder="Search" />
      </div>
      <div className="hero" />
    </div>
  );
};

export default Search;
