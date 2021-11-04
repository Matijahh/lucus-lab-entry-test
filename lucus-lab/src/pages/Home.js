import React, { Component } from "react";
import _ from "lodash";

/** Components Imports */
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      paginated: [],
      currentPage: 1,
    };
    this.fetchData = this.fetchData.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const pageSize = 10;
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const fetchRes = await res.json();
    this.setState({ results: fetchRes });
    this.setState({ paginated: _(fetchRes).slice(0).take(pageSize).value() });
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
          <Table
            data={this.state.results}
            paginated={this.state.paginated}
            currentPage={this.state.currentPage}
            onPageClick={this.handlePageClick}
          />
        </div>
      </div>
    );
  }
}

export default Home;
