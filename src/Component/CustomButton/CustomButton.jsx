import React from "react";
import classes from "./CustomButton.module.scss";

const CustomButton = ({ onClick, placeholder }) => {
  return (
    <div className={classes.root}>
      <button onClick={onClick}>{placeholder || ""}</button>
    </div>
  );
};

export default CustomButton;
