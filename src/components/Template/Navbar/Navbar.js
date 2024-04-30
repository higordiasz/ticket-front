import React from "react";
import NavbarBreadcrumb from "./Breadcrumb/Breadcrumb";
import NavbarCollapse from "./Collapse/Collapse";
import "./navbar.css";

import Logo from "../../../assets/images/logo.png";

const Navbar = ({ page, notifications, showSearch }) => {
  return (
    <nav
      className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
      id="navbarBlur"
      navbar-scroll="true"
    >
      <div className="container-fluid py-1 px-3">
        <NavbarBreadcrumb page={page} />
      </div>
      <NavbarCollapse notifications={notifications} showSearch={showSearch} />
    </nav>
  );
};

export default Navbar;
