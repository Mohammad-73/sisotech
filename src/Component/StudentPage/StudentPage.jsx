import React, { useState } from "react";
import { Layout } from "antd";
import Student from "../Student/Student";
import Sider from "../../Component/Sider/Sider";

const { Content } = Layout;

const StudentPage = () => {
  const [sideVal, setSideVal] = useState("create");

  const handleSideVal = (name) => {
    setSideVal(name);
  };

  return (
    <>
      <Sider
        list={{ first: "مشاهده لینک پرداخت" }}
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
          <Student sideVal={sideVal} />
        </Content>
      </Layout>
    </>
  );
};

export default StudentPage;
