import React from "react";
import "./formInput.style.scss";

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input
        className="form-input"
        {...otherProps}
        onChange={e => handleChange(e.target.value)}
      />
      {label ? (
        <label
          className={`${otherProps ? "shrink" : ""} form-input-label`}
          htmlFor={label.toLowerCase()}
        >
          {label.toUpperCase()}
        </label>
      ) : null}
    </div>
  );
}
