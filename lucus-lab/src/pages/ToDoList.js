import React, { Component } from "react";

/** Components Imports */
import Sidebar from "../components/Sidebar";

class ToDoList extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Sidebar />
        <div className="page-content">
          <span className="page-title">To Do List</span>
        </div>
      </div>
    );
  }
}

export default ToDoList;
