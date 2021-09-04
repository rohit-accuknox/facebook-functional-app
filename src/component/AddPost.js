import {
  FileImageOutlined,
  SmileOutlined,
  VideoCameraFilled,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import React, { useState } from "react";
import "./AddPost.css";
const AddPost = (props) => {
  const [msg, setMsg] = useState([]);
  const [link, setLink] = useState([]);
  
  let handlePost = (e) => {
    e.preventDefault();
    let posts = props.postData;
    posts.unshift({
      comments: [],
      likes: 4,
      message: msg,
      bgImage: link,
      id:Math.random(),
      createdAt: 1,
      name: "Rohit Vernekar",
      image:
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=259&q=80",
    });
    setMsg("");
    setLink("")
    console.log(posts);
    props.setPostData(posts);
    localStorage.setItem("Posts", JSON.stringify(posts));
    props.setstate(!props.state);
   
  };
  let handleMsg = (e) => {
    setMsg(e.target.value);
  };
  let handleLink = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="addpost">
      <div className="addpost-top">
        <Avatar className="addpost-avatar" src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" />

        <input
          className="addpost-input"
          placeholder="What's on your mind, Rohit?"
          onChange={handleMsg}
          value={msg}
        />
        <input  className="addpost-input"
          placeholder="Paste Link" onChange={handleLink} value={link} />
        <button className="addpost-button" onClick={handlePost}> POST</button>
      </div>
      <div className="addpost-bottom">
        <div className="addpost-option">
          <VideoCameraFilled style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>
        <div className="addpost-option">
          <FileImageOutlined style={{ color: "green" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="addpost-option ">
          <SmileOutlined style={{ color: "yellow" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
