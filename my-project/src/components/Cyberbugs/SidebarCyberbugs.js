import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarsOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
export default function SidebarCyberbugs() {
  const [state, setState] = useState({
    collapsed: false,
  });
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
  return (
    <div className="h-100">
      <Sider
        trigger={null}
        collapsible
        collapsed={state.collapsed}
        style={{ height: "100%", width: "100%", minWidth: "100%" }}
      >
        <div className="text-right text-light pr-2" onClick={toggle}>
          <BarsOutlined
            style={{ cursor: "pointer", color: "#fff", fontSize: 25 }}
          />
        </div>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            style={{ fontSize: 12 }}
            className="mt-2 mb-2"
            key="1"
            icon={<PlusOutlined />}
          >
            <span className="mb-2">Create issue</span>
          </Menu.Item>
          <Menu.Item style={{ fontSize: 12 }} key="2" icon={<SearchOutlined />}>
            Search
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}
