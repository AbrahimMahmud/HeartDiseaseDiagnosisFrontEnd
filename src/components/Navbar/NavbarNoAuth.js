import React, { Component } from "react";
import "./NavbarNoAuth.css";

class NavbarNoAuth extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbarNOAUTH-logo">
          HDD-ML
          <i className="fab fa-connectdevelop"></i>
        </h1>
      </nav>
    );
  }
}

export default NavbarNoAuth;
