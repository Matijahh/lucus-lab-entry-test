import React, { Component } from "react";

/** Components Imports */
import Sidebar from "../components/Sidebar";
import SearchInput from "../components/SearchInput";

/** Images Imports */
import Search from "../assets/img/search.png";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: "programming",
      results: [],
      clientId: "Lv8Olhsa28dAqyYSnazjV3BnI8nvSBbT0s7qO7qvlF4",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const wrapper = async () => {
      const url = `https://api.unsplash.com/search/photos?page=1&query=${this.state.photo}&client_id=${this.state.clientId}`;
      const res = await fetch(url);
      const fetchRes = await res.json();
      this.setState({ results: fetchRes.results });
    };
    wrapper();
  }

  handleChange(e) {
    this.setState({ photo: e.target.value });
  }

  async handleClick(e) {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${this.state.photo}&client_id=${this.state.clientId}`;
    const res = await fetch(url);
    const fetchRes = await res.json();
    this.setState({ results: fetchRes.results });
  }

  render() {
    return (
      <div className="page-wrapper">
        <Sidebar />
        <div className="page-content">
          <div className="gallery-wrapper">
            <span className="page-title">Gallery</span>
            <SearchInput
              name="photo"
              placeholder="Search for Photos..."
              onChange={this.handleChange}
              onClick={this.handleClick}
            />
            <div className="images-wrapper">
              {this.state.results.map((photo) => {
                return (
                  <img src={photo.urls && photo.urls.regular} alt="Smth" />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
