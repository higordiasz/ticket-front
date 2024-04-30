import React from "react";
import NavbarSearch from "./Search/Search";
import NotificationIcon from "./Notification/Icon";

const NavbarCollapse = ({ showSearch, notifications }) => {
  return (
    <div
      className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
      id="navbar"
    >
      {showSearch ? <NavbarSearch /> : <></>}
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item d-xl-none ps-3 d-flex -align-items-center">
          <a className="nav-link text-body p-0" id="iconNavbarSidenav">
            <div className="sidenav-toogler-inner">
              <span className="material-symbols-outlined">menu</span>
            </div>
          </a>
        </li>
        <NotificationIcon notifications={notifications} />
      </ul>
    </div>
  );
};

export default NavbarCollapse;
