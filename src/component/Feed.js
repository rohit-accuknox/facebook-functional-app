import React, { useState } from "react";
import AddPost from "./AddPost";
import "./Feed.css";
import Post from "./Post";
import Stories from "./Stories";
const Feed = () => {
  const [postData, setPostData] = useState([]);
  const [state, setstate] = useState(1);
  return (
    <div className="feed">
      <Stories />
      <AddPost
        postData={postData}
        setPostData={setPostData}
        setstate={setstate}
        state={state}
      />
      <Post
        postData={postData}
        setPostData={setPostData}
        setstate={setstate}
        state={state}
      />
    </div>
  );
};

export default Feed;
