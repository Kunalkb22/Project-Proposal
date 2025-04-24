// import React from "react";
// import {
//   CBadge,
//   CSidebar,
//   CSidebarBrand,
//   CSidebarHeader,
//   CSidebarNav,
//   CNavGroup,
//   CNavItem,
//   CNavTitle,
// } from "@coreui/react";

// import CIcon from "@coreui/icons-react";
// import {
//   cilCloudDownload,
//   cilLayers,
//   cilPuzzle,
//   cilCalculator,
//   cilHome,
// } from "@coreui/icons";

// export const SideBar2 = () => {
//   return (
//     <CSidebar className="border-end" colorScheme="light">
//       <CSidebarHeader className="border-bottom">
//         <CSidebarBrand>
//           <i
//             style={{
//               fontWeight: "bold",
//               fontSize: "24px",
//               paddingRight: "5px",
//             }}
//             class="bi bi-ticket-perforated"
//           ></i>
//           <span style={{ fontWeight: "bold", fontSize: "24px" }}>Eventive</span>
//         </CSidebarBrand>
//       </CSidebarHeader>
//       <CSidebarNav>
//         <CNavItem href="/home">
//           <CIcon customClassName="nav-icon" icon={cilHome} /> Home
//         </CNavItem>
//         <CNavItem href="/createEvent">
//           <CIcon customClassName="nav-icon" icon={cilCalculator} /> Create New
//           Event
//           <CBadge color="primary ms-auto">NEW</CBadge>
//         </CNavItem>
//         <CNavGroup
//           toggler={
//             <>
//               <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Events
//               Related
//             </>
//           }
//         >
//           <CNavItem href="/purchaseTickets">
//             <span className="nav-icon">
//               <span className="nav-icon-bullet"></span>
//             </span>{" "}
//             Purchase Tickets
//           </CNavItem>
//           <CNavItem href="/refundTickets">
//             <span className="nav-icon">
//               <span className="nav-icon-bullet"></span>
//             </span>{" "}
//             Refund Tickets
//           </CNavItem>
//         </CNavGroup>
//       </CSidebarNav>
//     </CSidebar>
//   );
// };

// export default SideBar2;


























import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  CBadge,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavGroup,
  CNavItem,
  CNavTitle,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import {
  cilCloudDownload,
  cilLayers,
  cilPuzzle,
  cilCalculator,
  cilHome,
} from "@coreui/icons";

export const SideBar2 = () => {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("storedUser" + JSON.stringify(storedUser));
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const handleLogout = () => {
    axios
      .post("http://localhost:8081/logout")
      .then(() => {
        localStorage.removeItem("user"); // Remove from localStorage
        navigate("/"); // Redirect to login page
      })
      .catch((err) => {
        console.error("Logout error:", err);
        alert("Failed to logout.");
      });
  };
  return (
    <CSidebar className="border-end" colorScheme="light">
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>
          <i
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              paddingRight: "5px",
            }}
            className="bi bi-ticket-perforated"
          ></i>
          <span style={{ fontWeight: "bold", fontSize: "24px" }}>Eventive</span>
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavItem href="/home">
          <CIcon customClassName="nav-icon" icon={cilHome} /> Home
        </CNavItem>
        {user?.role === "Admin" && (
          <CNavItem href="/createEvent">
            <CIcon customClassName="nav-icon" icon={cilCalculator} /> Create New
            Event
            <CBadge color="primary ms-auto">NEW</CBadge>
          </CNavItem>
        )}
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Events
              Related
            </>
          }
        >
          <CNavItem href="/purchaseTickets">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{" "}
            Purchase Tickets
          </CNavItem>
          <CNavItem href="/refundTickets">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{" "}
            Refund Tickets
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
      {/* Footer: User info + Logout button */}
      <div
        className="d-flex align-items-center justify-content-between p-3 border-top"
        style={{ fontSize: "14px", fontWeight: "500" }}
      >
        <div>
          Logged in as:
          <br />
          <span style={{ color: "#4f5d73" }}>{user?.email || "Guest"}</span>
        </div>
        {user && (
          <button
            className="btn btn-sm logout-btn d-flex align-items-center gap-1"
            onClick={handleLogout} // ← Replace with your actual logout function
            title="Logout"
          >
            <i className="bi bi-box-arrow-right"></i>
          </button>
        )}
      </div>
    </CSidebar>
  );
};

export default SideBar2;