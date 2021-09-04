import React from "react";
import {
  CalendarFilled,
  FlagFilled,
  ShopFilled,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <Avatar src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=259&q=80" />{" "}
        <h3 style={{ paddingLeft: "10px" }}>Rohit Vernekar</h3>
      </div>
      <div className="sidebar-options">
        <UsergroupAddOutlined
          style={{ fontSize: "25px", color: "#2e81f4", paddingRight: "10px" }}
        />
        <h3> Friends</h3>
      </div>
      <div className="sidebar-options">
        <UsergroupDeleteOutlined
          style={{ fontSize: "25px", color: "#2e81f4", paddingRight: "10px" }}
        />
        <h3>Groups</h3>
      </div>
      <div className="sidebar-options">
        <ShopFilled
          style={{ fontSize: "25px", color: "#2e81f4", paddingRight: "10px" }}
        />
        <h3> Marketplace</h3>
      </div>
      <div className="sidebar-options">
        <VideoCameraOutlined
          style={{ fontSize: "25px", color: "#2e81f4", paddingRight: "10px" }}
        />
        <h3> Watch</h3>
      </div>
      <div className="sidebar-options">
        <FlagFilled
          style={{ fontSize: "25px", color: "#2e81f4", paddingRight: "10px" }}
        />
        <h3> Pages</h3>
      </div>
      <div className="sidebar-options">
        <CalendarFilled
          style={{ fontSize: "25px", color: "#2e81f4", paddingRight: "10px" }}
        />
        <h3> Events</h3>
      </div>
    </div>
  );
};
export default Sidebar;
