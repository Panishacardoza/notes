import React from "react";
import NoteLogo from "../assets/description.svg";
import "../style/SideBar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1 className="side-text">Notes App</h1>
      <div className='side-head'>
        <img src={NoteLogo} style={{ width: "35px" }} alt='' />
        <p className="side-note">Notes</p>
      </div>
    </div>
  );
};

export default Sidebar;
