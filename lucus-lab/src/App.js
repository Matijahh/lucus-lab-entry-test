import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./protected.route";

/** Style Imports */
import "./assets/scss/app.scss";

/** Pages Imports */
import Login from "./pages/Login";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ToDoList from "./pages/ToDoList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/gallery" component={Gallery} />
          <ProtectedRoute path="/todo" component={ToDoList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
