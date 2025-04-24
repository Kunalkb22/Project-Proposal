import React from "react";
//import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {/* Sidebar Navigation */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <i
          style={{ fontWeight: "bold", fontSize: "24px", paddingRight: "5px" }}
          class="bi bi-geo-alt-fill"
        ></i>
        <span style={{ fontWeight: "bold", fontSize: "32px" }}> Tracktive</span>
        <nav className="nav flex-column">
          <NavLink
            className="nav-link text-white"
            to="/home"
            activeclassname="active"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link text-white"
            to="/expenses"
            activeclassname="active"
          >
            Expenses
          </NavLink>
          <NavLink
            className="nav-link text-white"
            to="/settings"
            activeclassname="active"
          >
            Settings
          </NavLink>
          <NavLink
            className="nav-link text-white"
            to="/logout"
            activeclassname="active"
          >
            Logout
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
