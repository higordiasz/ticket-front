import React from "react";
import { Link } from "react-router-dom";
import Notification from "./Notification/Notification";
import UserImage from "../../../../assets/images/logo.png";

const HeaderNavigation = ({
  notifications,
  showNotifications,
  handleNotifications,
  handleLogout,
}) => {
  return (
    <div className="header-navigation">
      <nav className="header-navigation-links">
        <Link to={"/home"}>Home</Link>
        <Link to={"/ticket"}>Chamados</Link>
      </nav>
      <div className="header-navigation-actions">
        <Notification
          notifications={notifications}
          showNotifications={showNotifications}
          handleNotifications={handleNotifications}
        />
        <a href="" onClick={handleLogout} className="icon-button">
          <span className="material-symbols-outlined">logout</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderNavigation;
