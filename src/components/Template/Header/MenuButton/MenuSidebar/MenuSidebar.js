import React from "react";
import Icon from "../../../../../assets/images/icon.svg";
import "./menusidebar.css";

const MenuSidebar = ({
  handleHomeButton,
  handleTicketButton,
  handleNotificationButton,
  handleSignOutButton,
  handleCloseMenu,
}) => {
  return (
    <aside className="header__button_container_aside">
      <div className="aside__header">
        <div onClick={handleHomeButton} className="aside__logo">
          <img src={Icon} alt="text" />
        </div>
        <div onClick={handleCloseMenu} className="aside_close">
          <span className="material-symbols-outlined">close</span>
        </div>
      </div>
      <div className="aside__content">
        <div onClick={handleHomeButton} className="aside__item">
          <span className="material-symbols-outlined">menu</span>
          <span className="aside__item_title">Home</span>
        </div>
        <div onClick={handleTicketButton} className="aside__item">
          <span className="material-symbols-outlined">menu</span>
          <span className="aside__item_title">Chamados</span>
        </div>
        <div onClick={handleNotificationButton} className="aside__item">
          <span className="material-symbols-outlined">notifications</span>
          <span className="aside__item_title">Notificações</span>
        </div>
      </div>
      <div onClick={handleSignOutButton} className="aside__footer">
        <span className="material-symbols-outlined">logout</span>
      </div>
    </aside>
  );
};

export default MenuSidebar;
