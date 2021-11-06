import React from "react";

/** Images Imports */
import Search from "../assets/img/search.png";

const SearchInput = ({ photo, placeholder, onChange, onClick, numeric }) => {
  return (
    <div className="search-input-wrapper">
      <input
        className="input-field"
        type={numeric ? "number" : "text"}
        name={photo}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button className="search-btn" onClick={onClick}>
        <img src={Search} alt="Search" />
      </button>
    </div>
  );
};

export default SearchInput;
