import React, { useEffect } from "react";
import SidebarNavItem from "./Item/Item";

const SidebarCollapse = ({ items }) => {
  useEffect(() => {
    console.log(items);
  }, []);

  return (
    <div
      className="collapse navbar-collapse  w-auto "
      id="sidenav-collapse-main"
    >
      <ul className="navbar-nav">
        {items.map((item, index) => (
          <SidebarNavItem
            key={index}
            active={item.active}
            href={item.href}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarCollapse;
