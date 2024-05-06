import React from "react";
import "./header.css";
import HeaderLogo from "./Logo/Logo";
import HeaderNavigation from "./Navigation/Navigation";
import MenuButton from "./MenuButton/MenuButton";

const Header = ({
  notifications,
  showNotifications,
  handleNotifications,
  handleLogout,
  handleHomeButton,
  handleTicketButton,
  handleNotificationButton,
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
        <MenuButton
          handleHomeButton={handleHomeButton}
          handleTicketButton={handleTicketButton}
          handleNotificationButton={handleNotificationButton}
          handleSignOutButton={handleLogout}
        />
      </div>
    </header>
  );
};

export default Header;
