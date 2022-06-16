import React from "react";
import { Layout } from "antd";
import classes from "./Header.module.scss";

const { Header } = Layout;

const HeaderSite = () => {
  return (
    <div className={classes.root}>
      <Header className="header">
        <div className={classes.headerContainer}>
          <div>
            <h1 className={classes.title}>سامانه آموزش</h1>
            <h1 className={classes.sample}>سمپل</h1>
          </div>
          <div>
            <button className={classes.button}>
              {window.location.pathname === "/admin" ? "ادمین" : "دانش آموز"}
            </button>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default HeaderSite;
