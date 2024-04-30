import React from "react";

import Logo from "../../../../assets/images/logo.png";

const SidebarHeader = () => {
  return (
    <div className="sidenav-header">
      <a className="navbar-brand m-0" href="">
        <img src={Logo} className="navbar-brand-img h-100" alt="main_logo" />
        <span className="ms-1 font-weight-bold">PM Pancas</span>
      </a>
    </div>
  );
};

export default SidebarHeader;
