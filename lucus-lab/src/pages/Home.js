import React, { Component } from "react";
import _ from "lodash";

/** Redux Imports */
import { connect } from "react-redux";
import { getPosts } from "../store/actions";

/** Components Imports */
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import SelectField from "../components/SelectField";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginated: [],
      currentPage: 1,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
    const pageSize = 10;
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
            <SelectField
              label="Search by User ID"
              options={[
                { value: 1, name: 1 },
                { value: 2, name: 2 },
                { value: 3, name: 3 },
                { value: 4, name: 4 },
                { value: 5, name: 5 },
                { value: 6, name: 6 },
                { value: 7, name: 7 },
              ]}
            />
            {this.props.posts && (
              <Table
                data={this.props.posts}
                paginated={this.state.paginated}
                currentPage={this.state.currentPage}
                onPageClick={this.handlePageClick}
              />
            )}{" "}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.Posts.posts && state.Posts.posts.posts };
};

export default connect(mapStateToProps, { getPosts })(Home);
