import React, { useState, useEffect } from "react";
import Story from "./Story";
import "./Stories.css";
import { ArrowRightOutlined } from "@ant-design/icons";

const Stories = () => {
  const [storyData, setStoryData] = useState([]);
  useEffect(() => {
    fetch("https://612e2d8cd11e5c00175583e3.mockapi.io/Story")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setStoryData(data);
      });
  }, []);
  return (
    <div className="stories">
      {storyData.map((story, id) => {
        return (
          <Story
            key={id}
            username={story.name}
            image={story.image}
            bgImage={story.bgImage}
          />
        );
      })}
      {/* <Story />
            <Story />
            <Story/>
            <Story/> */}

      <div className="slider">
        <ArrowRightOutlined style={{ fontSize: "20px" }} />
      </div>
    </div>
  );
};

export default Stories;
