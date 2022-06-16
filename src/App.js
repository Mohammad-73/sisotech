import { LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import "antd/dist/antd.css";
import HeaderSite from "./Component/Header/Header";

import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from "./Component/StudentPage/StudentPage";
import AdminPage from "./Component/AdminPage/AdminPage";

const { Header, Content } = Layout;

const App = () => (
  <ConfigProvider direction="rtl">
    <Layout>
      <HeaderSite />
      <Layout>
        <Routes>
          <Route path="/admin" exact element={<AdminPage />} />
          <Route path="/student" exact element={<StudentPage />} />
        </Routes>
      </Layout>
    </Layout>
  </ConfigProvider>
);

export default App;
