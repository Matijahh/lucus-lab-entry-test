import React from "react";

const SelectField = ({ options, label, handleChange }) => {
  return (
    <div className="select-field-wrapper">
      <label>{label}</label>
      <select name="select" onChange={handleChange}>
        <option value="" selected disabled hidden>
          Select User ID
        </option>
        {options &&
          options.map((option, key) => {
            return (
              <option value={option.value} key={key}>
                {option.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default SelectField;
