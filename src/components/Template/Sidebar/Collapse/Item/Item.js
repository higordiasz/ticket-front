import React from "react";

const SidebarNavItem = ({ active, name, icon, href }) => {
  return (
    <li className="nav-item">
      <a className={active ? "nav-link active" : "nav-link"} href={href}>
        <div className="icon icon-shape icon-sm shadown border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className="nav-link-text ms-1">{name}</span>
      </a>
    </li>
  );
};

export default SidebarNavItem;
