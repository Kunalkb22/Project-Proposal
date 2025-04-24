import React from "react";
import Sidebar2 from "./SiderBar2.js";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar2 />

      {/* Main content */}
      <div className="flex-grow-1 p-4" style={{ backgroundColor: "#F4F7FF" }}>
        <Outlet /> {/* This is where the page-specific content will render */}
      </div>
    </div>
  );
}

export default Layout;
