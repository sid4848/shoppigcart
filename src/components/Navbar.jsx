import React from "react";
import SearchIcon from "@mui/icons-material/Search"; //search
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"; // profile
import { IconButton } from "@mui/material";
import Earth from "../img/earth.svg";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <div className="sp_navbar">
      <div className="sp_navbar-header">
        <img src={Earth} alt="logo" />
        <h2> Earthly </h2>
      </div>
      <div className="sp_searchBar">
        <input className="sp_search" placeholder="Search.."></input>
        <IconButton style={{ color: "white", background: "black" }}>
          <SearchIcon />
        </IconButton>
      </div>
      <div className="sp_navbar-icons">
        <IconButton style={{ color: "#e7e0e0" }}>
          <NotificationsActiveOutlinedIcon />
        </IconButton>
        <IconButton style={{ color: "#e7e0e0", marginRight: "1rem" }}>
          <MarkUnreadChatAltOutlinedIcon />
        </IconButton>
        <button className="sp_navbar-btn Button">Sign in</button>
        <button className="sp_navbar-btn Button">Sign up</button>
        <IconButton style={{ color: "#e7e0e0" }}>
          <AccountCircleOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}
