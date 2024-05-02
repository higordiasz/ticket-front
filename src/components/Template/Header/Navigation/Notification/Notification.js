import React, { useState } from "react";
import NotificationItem from "./Item/Item";
import "./notification.css";

const Notification = ({
  notifications,
  showNotifications,
  handleNotifications,
}) => {
  return (
    <div onClick={handleNotifications} className="icon-button">
      <span className="notification_content">
        <span className="notification_badge"></span>
        <span className="material-symbols-outlined">notifications</span>
      </span>
      <span
        style={showNotifications ? { display: "block" } : { display: "none" }}
        className="notification_card"
      >
        <header className="notification_card_header">
          <span>Notificações</span>
        </header>
        <main className="notification_card_content">
          {notifications.length < 1 ? (
            <span className="notification_no_message">
              Você não possui nenhuma notificação no momento.
            </span>
          ) : (
            notifications.map((notification, index) => {
              return (
                <NotificationItem
                  icon={notification.icon}
                  message={notification.message}
                  time={notification.time}
                  title={notification.title}
                  key={index}
                />
              );
            })
          )}
          {notifications.length > 0 ? (
            <footer className="notification_card_footer">
              <span className="material-symbols-outlined notification_card_footer_icon">
                visibility
              </span>
              <span>Veja mais</span>
            </footer>
          ) : (
            <></>
          )}
        </main>
      </span>
    </div>
  );
};

export default Notification;
