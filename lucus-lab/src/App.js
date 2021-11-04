import React, { Component } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

/** Style Imports */
import "./App.scss";

/** Pages Imports */
import Login from "./pages/Login";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ToDoList from "./pages/ToDoList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/todo" element={<ToDoList />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
