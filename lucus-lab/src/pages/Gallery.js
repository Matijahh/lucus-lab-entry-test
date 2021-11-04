import React, { Component } from "react";

/** Components Imports */
import Sidebar from "../components/Sidebar";

class Gallery extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Sidebar />
        <div className="page-content">
          <span className="page-title">Gallery</span>
        </div>
      </div>
    );
  }
}

export default Gallery;
