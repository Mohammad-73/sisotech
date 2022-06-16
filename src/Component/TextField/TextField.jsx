import React from "react";
import classes from "./TextField.module.scss";

const TextField = ({ value, handleChange, placeholder, name }) => {
  return (
    <div className={classes.root}>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder || ""}
        name={name || ""}
      />
    </div>
  );
};

export default TextField;
