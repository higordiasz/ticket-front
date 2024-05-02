import React from "react";
import "./header.css";
import HeaderLogo from "./Logo/Logo";
import HeaderNavigation from "./Navigation/Navigation";

const Header = ({
  notifications,
  showNotifications,
  handleNotifications,
  handleLogout,
}) => {
  return (
    <header className="header">
      <div className="header-content responsive-wrapper">
        <HeaderLogo />
        <HeaderNavigation
          notifications={notifications}
          showNotifications={showNotifications}
          handleNotifications={handleNotifications}
          handleLogout={handleLogout}
        />
        <a className="header__button">
          <span className="material-symbols-outlined">menu</span>
          <span>Menu</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
