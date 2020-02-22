import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

class ListBeers extends Component {
  state = {
    listOfBeers: []
  };

  getAllBeers = () => {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers`)
      .then(responseFromApi => {
        this.setState({ listOfBeers: responseFromApi.data });
      })
      .catch(err => console.log("Error", err));
  };
  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.listOfBeers.map(beer => {
          return (
            <Link to="/SingleBeer">
              <div key={beer._id}>
                <h1>{beer.name}</h1>
                <img src={beer.image_url} alt=""></img>
                <p>{beer.tagline}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default ListBeers;
