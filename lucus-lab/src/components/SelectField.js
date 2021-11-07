import React from "react";

const SelectField = ({ options, label }) => {
  return (
    <div className="select-field-wrapper">
      <label>{label}</label>
      <select name="select">
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
