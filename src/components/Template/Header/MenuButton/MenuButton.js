import React, { useState } from "react";
import MenuSidebar from "./MenuSidebar/MenuSidebar";
import "./menubutton.css";

const MenuButton = ({
  handleHomeButton,
  handleTicketButton,
  handleNotificationButton,
  handleSignOutButton,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <a onClick={handleShowMenu} className="header__button">
        <span className="material-symbols-outlined">menu</span>
        <span>Menu</span>
      </a>
      <div
        onClick={handleShowMenu}
        className="header__button_container"
        style={showMenu ? { display: "block" } : { display: "none" }}
      >
        <MenuSidebar
          handleHomeButton={handleHomeButton}
          handleTicketButton={handleTicketButton}
          handleNotificationButton={handleNotificationButton}
          handleSignOutButton={handleSignOutButton}
          handleCloseMenu={handleShowMenu}
        />
      </div>
    </>
  );
};

export default MenuButton;
