import Avatar from "antd/lib/avatar/avatar";
import React, { useState } from "react";
import Comment from "./Comment";
import "./CommentBox.css";

const CommentBox = (props) => {
  const [addComment, setAddComment] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    const post = props.post;
    // console.log(post)
    post.comments.push([addComment]);
    // console.log(addComment)
    setAddComment("");
    let postdata = props.postData;
    let updatedPosts = [...postdata, post];
    localStorage.setItem("Posts", JSON.stringify(updatedPosts));
    props.setstate(!props.state);
  };
  return (
    <>
      <div className="comment">
        <form className="comment-option" onSubmit={handleInput}>
          <Avatar
            className="comment-avatar"
            src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=259&q=80"
          />
          <input
            className="comment-input"
            value={addComment}
            placeholder="Write a comment"
            onChange={(e) => setAddComment(e.target.value)}
          />
        </form>
      </div>
      <div className="comment-list">
        {props.post.comments.map((comment, id) => {
          return (
            <Comment key={id} comment={comment} />
          );
        })}
      </div>
    </>
  );
};

export default CommentBox;
