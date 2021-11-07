import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { getPosts } from "../store/actions";

/** Components Imports */
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import SearchInput from "../components/SearchInput";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      paginated: [],
      currentPage: 1,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    const pageSize = 10;
    this.props.getPosts();
    this.setState({ results: this.props.posts });
    this.setState({
      paginated: _(this.props.posts).slice(0).take(pageSize).value(),
    });
  }

  handlePageClick(pageNum) {
    const pageSize = 10;
    this.setState({ currentPage: pageNum });
    const startIndex = (pageNum - 1) * pageSize;
    const paginatedPost = _(this.state.results)
      .slice(startIndex)
      .take(pageSize)
      .value();
    this.setState({ paginated: paginatedPost });
  }

  render() {
    return (
      <div className="page-wrapper">
        <Sidebar />
        <div className="page-content">
          <div className="gallery-wrapper">
            {" "}
            <SearchInput
              name="post"
              numeric
              placeholder="Search for Post [Type User ID]"
              onChange={() => {}}
            />
            <Table
              data={this.state.results}
              paginated={this.state.paginated}
              currentPage={this.state.currentPage}
              onPageClick={this.handlePageClick}
            />{" "}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.Posts.posts };
};

export default connect(mapStateToProps, { getPosts })(Home);
