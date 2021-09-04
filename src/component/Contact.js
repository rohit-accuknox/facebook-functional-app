import {
  MoreOutlined,
  SearchOutlined,
  VideoCameraFilled,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import React, { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [contactData, setContactData] = useState([]);
  useEffect(() => {
    fetch("https://612e2d8cd11e5c00175583e3.mockapi.io/contact")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setContactData(data);
      });
  }, []);
  return (
    <div className="contact">
      <div className="contact-top">
        <div className="contact-top-options">
          <h3 style={{ marginRight: "20px" }}>Contacts</h3>
        </div>
        <div className="contact-top-options">
          <VideoCameraFilled />{" "}
        </div>
        <div className="contact-top-options">
          <SearchOutlined />
        </div>
        <div className="contact-top-options">
          <MoreOutlined />{" "}
        </div>
      </div>
      <div className="contact-bottom">
        {contactData.map((contact, id) => {
          return (
            <div key={id} className="contact-row">
              <Avatar src={contact.image} />
              <span className={contact.active ? "live" : "notlive"}></span>
              <h3>{contact.name}</h3>
            </div>
          );
        })}
      </div>
      {/* <div className="contact-bottom">
        <div className="contact-row">
          <Avatar src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" />
          <span className="live"></span>
          <h3>CM Punk</h3>
        </div>
        <div className="contact-row">
          <Avatar src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" />
          <span className="live"></span>
          <h3>Rohit Sharma</h3>
        </div>
        <div className="contact-row">
          <Avatar src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" />
          <span className="live"></span>
          <h3>Ms Dhoni</h3>
        </div>
        <div className="contact-row">
          <Avatar src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" />
          <span className="live"></span>
          <h3>Ronaldo</h3>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
