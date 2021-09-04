import React, { useState, useEffect } from "react";
import {
  CommentOutlined,
  LikeFilled,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import "./Post.css";
import CommentBox from "./CommentBox";

const Post = (props) => {
  const [clickedPostId, setClickedPostId] = useState();

  const ShowComments = (postId) => {
    setClickedPostId(postId);
    console.log(postId);
  };

  const LikePost = (post) => {
    // console.log(post.id);
    let postdata = props.postData;

    const update = postdata.map((p, id) => {
      if (p.id === post.id) {
        p.isLiked = !post.isLiked;
      }
      return p;
    });
    // console.log(update);
    props.setPostData(update);

    localStorage.setItem("Posts", JSON.stringify(update));
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("Posts")) === null) {
      fetch("https://612e2d8cd11e5c00175583e3.mockapi.io/Posts")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          props.setPostData(data);
          localStorage.setItem("Posts", JSON.stringify(data));
        });
    } else {
      props.setPostData(JSON.parse(localStorage.getItem("Posts")));
    }
  }, []);
  return (
    <>
      {props.postData.map((post, index) => {
        return (
          <div key={index} className="post">
            <div className="post-top">
              <Avatar size={40} src={post.image} className="post-avatar" />
              <div className="post-top-info">
                <h3 style={{ paddingTop: "10px" }}>{post.name}</h3>
                <p>
                  Posted{" "}
                  {Math.abs(
                    new Date(post.createdAt).getHours() - new Date().getHours()
                  )}
                  Hr ago
                </p>
              </div>
            </div>
            <div className="post-bottom">
              <p>{post.message}</p>
            </div>
            <div className="post-image">
              <img src={post.bgImage} alt="" />
            </div>
            <div className="post-insight">
              <div className="post-insight-option">
                <LikeFilled style={{ color: "#2E81F4" }} />
                {post.isLiked ? post.likes + 1 : post.likes - 0} Likes
              </div>
              <div className="post-insight-option">
                <span>{post.comments.length} comments</span>
              </div>
            </div>

            <div className="post-options">
              <div className="post-option" onClick={() => LikePost(post)}>
                {!post.isLiked ? (
                  <LikeOutlined />
                ) : (
                  <LikeFilled style={{ color: "#2E81F4" }} />
                )}
                <p>Like</p>
              </div>
              <div
                className="post-option"
                onClick={() => ShowComments(post.id)}
              >
                <CommentOutlined />
                <p>Comment</p>
              </div>
              <div className="post-option">
                <ShareAltOutlined />
                <p>Share</p>
              </div>
            </div>

            <div class="post-comment">
              {clickedPostId === post.id || post.comments.length !== 0 ? (
                <CommentBox post={post} {...props} />
              ) : null}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
