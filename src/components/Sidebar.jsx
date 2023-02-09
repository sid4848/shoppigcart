import React from "react";
import { IconButton } from "@mui/material";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone"; // add products
import SearchIcon from "@mui/icons-material/Search";
import { categories1, categories2, categories3 } from "../utils/constants";

import "../css/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sp_sidebar">
      <div className="sp_sidebar-search">
        <IconButton style={{ color: "white", background: "#2A2538" }}>
          <SearchIcon />
        </IconButton>
        <input className="sp_sidebar-searching" placeholder="Search.."></input>
      </div>
      {categories1.map((category, index) => (
        <div key={index} className="sp_sidebar-menu">
          <span className="sp_sidebar-icon">{category.icon}</span>
          <span className="sp_sidebar-name">{category.name}</span>
        </div>
      ))}
      <div className="sp_sidebar-divider" />
      {categories2.map((category, index) => (
        <div key={index} className="sp_sidebar-menu">
          <span className="sp_sidebar-icon">{category.icon}</span>
          <span className="sp_sidebar-name">{category.name}</span>
        </div>
      ))}
      <div className="sp_sidebar-divider" />
      {categories3.map((category, index) => (
        <div key={index} className="sp_sidebar-menu">
          <span className="sp_sidebar-icon">{category.icon}</span>
          <span className="sp_sidebar-name">{category.name}</span>
        </div>
      ))}
      <div className="sp_sidebar-divider" />
      <div className="sp_sidebar-menu">
        <span className="sp_sidebar-icon">
          <AddCircleTwoToneIcon />
        </span>
        <span className="sp_sidebar-name">Add products</span>
      </div>
    </div>
  );
};

export default Sidebar;
