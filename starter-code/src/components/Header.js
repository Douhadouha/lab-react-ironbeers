import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header
          style={{ display: "block", backgroundColor: "blue", height: "30%" }}
        >
          <Link to="/Homepage/">
            <img src="/img/icons8.png" alt=""></img>
          </Link>
        </header>
      </div>
    );
  }
}

export default Header;
