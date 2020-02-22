import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div>
          <img src="/img/beers.png" alt=""></img>
          <Link to="/ListBeers/" style={{ textDecoration: "none" }}>
            <h1>All Beers</h1>
          </Link>
        </div>

        <div>
          <img src="/img/new-beer.png" alt=""></img>
          <Link to="/NewBeer/" style={{ textDecoration: "none" }}>
            <h1>New Beer</h1>
          </Link>
        </div>

        <div>
          <img src="/img/random-beer.png" alt=""></img>
          <Link to="/RandomBeers/" style={{ textDecoration: "none" }}>
            <h1>Random Beers</h1>
          </Link>
        </div>
      </div>
    );
  }
}
export default Homepage;
