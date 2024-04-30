import React from "react";
import SidebarHeader from "./Header/Header";
import SidebarCollapse from "./Collapse/Collapse";
import SidebarFooter from "./Footer/Footer";

import "./sidebar.css";

const Sidebar = ({ items }) => {
  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
      id="sidenav-main"
    >
      <SidebarHeader />
      <SidebarCollapse items={items} />
      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
