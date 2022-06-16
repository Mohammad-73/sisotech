import React, { useState } from "react";
import { Layout } from "antd";
import Admin from "../Admin/Admin";
import Sider from "../../Component/Sider/Sider";

const { Content } = Layout;

const AdminPage = () => {
  const [sideVal, setSideVal] = useState("create");

  const handleSideVal = (name) => {
    setSideVal(name);
  };

  return (
    <>
      <Sider
        list={{ first: "ایجاد لینک پرداخت", last: "مشاهده لینک پرداخت" }}
        sideVal={sideVal}
        handleSideVal={handleSideVal}
      />
      <Layout
        style={{
          padding: "0 4px 24px",
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            padding: 0,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Admin sideVal={sideVal} />
        </Content>
      </Layout>
    </>
  );
};

export default AdminPage;
