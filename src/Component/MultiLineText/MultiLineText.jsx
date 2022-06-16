import React from "react";
import classes from "./MultiLineText.module.scss";

const MultiLineText = ({ value, handleChange, placeholder, name, width }) => {
  return (
    <div className={classes.root}>
      <textarea
        style={{ width: `${width}%` }}
        type="text"
        value={value || ""}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder || ""}
        name={name || ""}
      />
    </div>
  );
};

export default MultiLineText;
