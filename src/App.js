import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";

import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop-page/Shop";
import Header from "./components/header/Header";
import SignInPage from "./pages/sign-in - sign-up/SignInPage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/signin" exact component={SignInPage} />
          <Route exact path="/Shop" component={Shop} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
