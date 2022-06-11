import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";

import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop-page/Shop";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Shop" component={Shop} />
        </Switch>
      </div>
    );
  }
}

export default App;
