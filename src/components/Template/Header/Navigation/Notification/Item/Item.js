import React from "react";

const NotificationItem = ({ icon, title, message, time }) => {
  return (
    <div className="notification_card_item">
      <div className="notification_card_item_icon">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="notification_card_item_text">
        <div className="notification_card_item_title">
          <span>{title}</span>
        </div>
        <div className="notification_card_item_description">
          <span>{message}</span>
        </div>
        <div className="notification_card_item_time">
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
