import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import TopHeader from "./component/header";
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="app">
      <TopHeader />
      <div className="app-body">
        <Sidebar />
        <Feed />
        <Contact />
      </div>
    </div>
  );
}

export default App;
