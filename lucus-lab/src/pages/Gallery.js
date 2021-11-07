import React, { Component } from "react";
import { connect } from "react-redux";
import { searchGallery } from "../store/actions";

/** Components Imports */
import Sidebar from "../components/Sidebar";
import SearchInput from "../components/SearchInput";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "programming",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.searchGallery(this.state.query);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleClick() {
    this.props.searchGallery(this.state.query);
  }

  render() {
    const photos =
      this.props.photos &&
      this.props.photos.photos &&
      this.props.photos.photos.photos;
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
            {photos && (
              <div className="images-wrapper">
                {photos.map((photo) => {
                  return (
                    <img src={photo.urls && photo.urls.regular} alt="Gallery" />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { photos: state.Gallery.photos };
};

export default connect(mapStateToProps, { searchGallery })(Gallery);
