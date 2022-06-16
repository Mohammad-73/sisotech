import React, { useState } from "react";
import classes from "./Sider.module.scss";
import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content, Sider } = Layout;

const SiderSite = ({ list, sideVal, handleSideVal }) => {
  return (
    <div className={classes.root}>
      <Sider width={300} className="site-layout-background">
        <div>
          <ul>
            {list.first && (
              <li onClick={() => handleSideVal("create")}>{list.first}</li>
            )}
            {list.last && (
              <li onClick={() => handleSideVal("delete")}>{list.last}</li>
            )}
          </ul>
        </div>
      </Sider>
    </div>
  );
};

export default SiderSite;
