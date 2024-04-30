import React from "react";
import NotificationItem from "./Items/Items";

const NotificationCard = ({ notifications }) => {
  return (
    <ul
      className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4"
      aria-labelledby="dropsownMenuButton"
    >
      {notifications.map((notification, index) => (
        <NotificationItem
          href={notification.href}
          image={notification.image}
          sub_title={notification.sub_title}
          time={notification.time}
          title={notification.title}
          key={index}
        />
      ))}
    </ul>
  );
};

export default NotificationCard;
