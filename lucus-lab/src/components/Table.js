import React, { useState } from "react";
import _ from "lodash";

/** Images Imports */
import Edit from "../assets/img/edit.png";

/** Modals Imports */
import EditPostModal from "../modals/EditPostModal";

const pageSize = 10;

const Table = ({ data, paginated, currentPage, onPageClick }) => {
  const [modal, setModal] = useState(false);
  const [currPost, setCurrPost] = useState({});

  const toggle = () => {
    setModal(!modal);
  };

  /** Logic for getting number of Paginated Posts */
  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div>
      {!paginated ? (
        <span>No data found!</span>
      ) : (
        <div className="tbl-wrapper">
          <table className="table tbl">
            <thead className="tbl-head">
              <tr>
                <th>Title</th>
                <th>Body</th>
                <th>User ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="tbl-body">
              {paginated.map((post, index) => {
                return (
                  <tr key={index}>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>{post.userId}</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setModal(true);
                          setCurrPost(post);
                          console.log(currPost);
                        }}
                      >
                        <img src={Edit} alt="Edit" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <nav className="pagination-container">
        <ul className="pagination">
          {pages.map((page) => {
            return (
              <li
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <p
                  className="page-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => onPageClick(page)}
                >
                  {page}
                </p>
              </li>
            );
          })}
        </ul>
      </nav>
      <EditPostModal modal={modal} toggle={toggle} post={currPost} />
    </div>
  );
};

export default Table;
