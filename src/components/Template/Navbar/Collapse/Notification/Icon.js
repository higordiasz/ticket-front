import React from "react";
import NotificationCard from "./Card/Card";

const NotificationIcon = ({ notifications }) => {
  return (
    <li className="nav-item dropdown pe-2 d-flex align-items-center">
      <a
        href="javascript:;"
        className="nav-link text-body p-0"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="material-symbols-outlined">notifications</span>
      </a>
      <NotificationCard notifications={notifications} />
    </li>
  );
};

export default NotificationIcon;
