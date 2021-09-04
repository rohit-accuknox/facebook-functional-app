import React from "react";
import "./Header.css";
import { Button, Tooltip } from "antd";
import {
  BellFilled,
  HomeFilled,
  MenuOutlined,
  MessageFilled,
  MoreOutlined,
  SearchOutlined,
  ShopFilled,
  SlidersOutlined,
  UsergroupAddOutlined,
  VideoCameraFilled,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
const TopHeader = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/240px-Facebook_f_logo_%282021%29.svg.png"
          alt="logo"
        />
        <div className="header-input">
          <SearchOutlined />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header-middle">
        <div className="header-option active">
          <HomeFilled style={{ fontSize: "25px", color: "#2e81f4" }} />
        </div>
        <div className="header-option">
          <VideoCameraFilled style={{ fontSize: "25px", color: "gray" }} />
        </div>
        <div className="header-option">
          <ShopFilled style={{ fontSize: "25px", color: "gray" }} />
        </div>
        <div className="header-option">
          <UsergroupAddOutlined style={{ fontSize: "25px", color: "gray" }} />
        </div>
        <div className="header-option">
          <SlidersOutlined style={{ fontSize: "25px", color: "gray" }} />
        </div>
      </div>

      <div className="header-right">
        <div className="header-info">
          <Avatar src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=259&q=80" />
          <h4>Rohit</h4>
        </div>

        <Tooltip title="Menu">
          <Button shape="circle" icon={<MenuOutlined />} />
        </Tooltip>
        <Tooltip title="Messenger">
          <Button shape="circle" icon={<MessageFilled />} />
        </Tooltip>
        <Tooltip title="Notification">
          <Button shape="circle" icon={<BellFilled />} />
        </Tooltip>
        <Tooltip title="Account">
          <Button shape="circle" icon={<MoreOutlined />} />
        </Tooltip>
      </div>
    </div>
  );
};
export default TopHeader;
