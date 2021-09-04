import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import "./Story.css";

const Story = (props) => {
  return (
    <div style={{ backgroundImage: `url(${props.bgImage})` }} className="story">
      <Avatar className="story-avatar" size={50} src={props.image} />
      <h4>{props.username}</h4>
    </div>
  );
};

export default Story;
