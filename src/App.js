import { Component } from "react";
import React from "react";
import Texter from "./Text";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
        
          <Route exact path="/"  component={Texter} />
         
        </Switch>
      </Router>
    );
  }
}

export default App;
