import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="red">
        <div className="container">
          <div className="nav-wrapper">
            <ul className="d-flex justify-content-center col-6">
              <li>
                <Link to="/">Google Search</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <Link to="/saved">Saved</Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
