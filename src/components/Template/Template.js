import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";

import "./template.css";

const Template = ({ content, name, showSearch }) => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const Navigate = useNavigate();

  const handleNotificationShow = () => {
    setShowNotifications(!showNotifications);
  };

  const handleLogout = () => {
    localStorage.setItem("token", "");
    return Navigate("/");
  };

  const handleHomeNavigate = () => Navigate("/home");

  const handleTicketNavigate = () => Navigate("/ticket");

  const handleNotificationNavigate = () => Navigate("/notifications");

  return (
    <>
      <Header
        notifications={notifications}
        showNotifications={showNotifications}
        handleNotifications={handleNotificationShow}
        handleLogout={handleLogout}
        handleHomeButton={handleHomeNavigate}
        handleNotificationButton={handleNotificationNavigate}
        handleTicketButton={handleTicketNavigate}
      />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        {content}
      </main>
    </>
  );
};

export default Template;
