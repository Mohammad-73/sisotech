import React from "react";
import classes from "./CardContainer.module.scss";

const CardContainer = ({ title, children }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h3>{title}</h3>
        <hr />
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default CardContainer;
