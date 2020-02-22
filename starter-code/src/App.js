import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage.js";
import NewBeer from "./components/NewBeer.js";
import ListBeers from "./components/ListBeers.js";
import RandomBeers from "./components/RandomBeers.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/NewBeer" component={NewBeer} />
        <Route exact path="/ListBeers" component={ListBeers} />
        <Route exact path="/RandomBeers" component={RandomBeers} />
      </Switch>
    </div>
  );
}

export default App;
