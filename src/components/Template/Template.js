import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

import "./template.css";

const Template = ({ content, name, showSearch }) => {
  const [items, setItems] = useState([
    {
      active: true,
      name: "Home",
      icon: "home",
      href: "#",
    },
    {
      active: false,
      name: "Abrir Chamado",
      icon: "home",
      href: "#",
    },
    {
      active: false,
      name: "Abertos",
      icon: "home",
      href: "#",
    },
    {
      active: false,
      name: "Fechados",
      icon: "home",
      href: "#",
    },
  ]);

  const [notifications, setNotifications] = useState([
    {
      href: "",
      image: "",
      title: "Teste",
      sub_title: " do teste",
      time: "1 dia atrás",
    },
  ]);

  return (
    <>
      <Sidebar items={items} />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Navbar
          notifications={notifications}
          page={name}
          showSearch={showSearch}
        />
        <div className="container-fluid py-4">{content}</div>
      </main>
    </>
  );
};

export default Template;
