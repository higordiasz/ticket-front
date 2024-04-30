import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";
import API from "../../api";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import NotificationModal from "./NotificationModal";
import CreateTicketModal from "./CreateTicket";

const Home = () => {
  // Use States
  const [tickets, setTickets] = useState({
    new: [],
    urgent: [],
    old: [],
    closed: [],
  });

  const [showNotifications, setShownotifications] = useState(false);

  const [showCreate, setShowCreate] = useState(false);

  const [notifications, setNotifications] = useState([
    {
      title: "Nova Mensagem",
      message: "Tem uma nova mensagem em seu chamado.",
      date: "23/04/2024",
      id: "1",
    },
    {
      title: "Nova Mensagem",
      message: "Tem uma nova mensagem em seu chamado.",
      date: "23/04/2024",
      id: "2",
    },
    {
      title: "Nova Mensagem",
      message: "Tem uma nova mensagem em seu chamado.",
      date: "23/04/2024",
      id: "3",
    },
    {
      title: "Nova Mensagem",
      message: "Tem uma nova mensagem em seu chamado.",
      date: "23/04/2024",
      id: "4",
    },
    {
      title: "Nova Mensagem",
      message: "Tem uma nova mensagem em seu chamado.",
      date: "23/04/2024",
      id: "5",
    },
    {
      title: "Nova Mensagem",
      message: "Tem uma nova mensagem em seu chamado.",
      date: "23/04/2024",
      id: "6",
    },
    {
      title: "Nova Mensagem",
      message: "Tem uma nova mensagem em seu chamado.",
      date: "23/04/2024",
      id: "7",
    },
    {
      title: "Nova Mensagem",
      message: "Tem uma nova mensagem em seu chamado.",
      date: "23/04/2024",
      id: "8",
    },
    {
      title: "Nova Mensagem",
      message: "Tem uma nova mensagem em seu chamado.",
      date: "23/04/2024",
      id: "9",
    },
    {
      title: "Nova Mensagem",
      message: "Tem uma nova mensagem em seu chamado.",
      date: "23/04/2024",
      id: "10",
    },
  ]);
  // Variables
  var firstTime = true;
  const navigate = useNavigate();

  // Functions
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  // Notification Functions

  const showNotificationsModal = () => setShownotifications(true);
  const closeNotificationModal = () => setShownotifications(false);
  const removeNotification = (notificationToRemove) => {
    const updatedNotification = notifications.filter(
      (notification) => notification.id !== notificationToRemove
    );
    setNotifications(updatedNotification);
  };

  // Modal Create Ticket

  const handleShowCreateModal = () => setShowCreate(true);
  const handleCloseCreateModal = () => setShowCreate(false);

  // Ticket Functions
  const addTicket = (
    ticketID,
    ownerID,
    title,
    description,
    problem,
    department,
    created,
    type,
    buttons = {
      remove: false,
      reply: true,
      done: true,
    }
  ) => {
    const newTicket = {
      ticketID: ticketID,
      ownerID: ownerID,
      title: title,
      description: description,
      problem: problem,
      department: department,
      created: created,
      type: type,
      buttons: buttons,
    };
    const newTickets = { ...tickets };
    newTickets[type].push(newTicket);
    setTickets(newTickets);
  };

  const removeTicket = (ticketID) => {
    const newTickets = { ...tickets };
    newTickets.new.forEach((t) => {
      if (t.ticketID === ticketID) newTickets.new.pop(t);
    });
    newTickets.old.forEach((t) => {
      if (t.ticketID === ticketID) newTickets.old.pop(t);
    });
    newTickets.urgent.forEach((t) => {
      if (t.ticketID === ticketID) newTickets.urgent.pop(t);
    });
    newTickets.closed.forEach((t) => {
      if (t.ticketID === ticketID) newTickets.closed.pop(t);
    });
    setTickets(newTickets);
  };

  const replyTicket = (ticketID) => {};

  const doneTicket = (ticketID) => {};

  const loadAllTickets = async (tk) => {
    if (tk !== "") {
      const ts = await API.Controllers.Ticket.getAllTickets("all", "all", tk);
      const data = ts.data.tickets;
      const news = data.New;
      const old = data.Old;
      const urgent = data.Urgent;
      const closed = data.Closed;
      console.table(news);
      console.table(old);
      console.table(urgent);
      console.table(closed);
      for (let i = 0; i < news.length; i++) {
        addTicket(
          news[i].ticketID,
          news[i].ownerID,
          news[i].title,
          news[i].description,
          news[i].problem,
          news[i].department,
          news[i].created,
          "new"
        );
      }
      for (let i = 0; i < old.length; i++) {
        addTicket(
          old[i].ticketID,
          old[i].ownerID,
          old[i].title,
          old[i].description,
          old[i].problem,
          old[i].department,
          old[i].created,
          "old"
        );
      }
      for (let i = 0; i < urgent.length; i++) {
        addTicket(
          urgent[i].ticketID,
          urgent[i].ownerID,
          urgent[i].title,
          urgent[i].description,
          urgent[i].problem,
          urgent[i].department,
          urgent[i].created,
          "urgent"
        );
      }
      for (let i = 0; i < closed.length; i++) {
        addTicket(
          closed[i].ticketID,
          closed[i].ownerID,
          closed[i].title,
          closed[i].description,
          closed[i].problem,
          closed[i].department,
          closed[i].created,
          "closed"
        );
      }
    }
  };

  const handleCreateTicket = () => console.log("teste");

  // Check Token

  const checkToken = async (storedToken) => {
    let valid = await API.Controllers.Login.checkLogin(storedToken);
    if (!valid.valid) return navigate("/");
    await sleep(100);
    await loadAllTickets(storedToken);
    return;
  };

  // Use effect
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const fetchData = async () => {
      await checkToken(storedToken);
    };
    if (firstTime) {
      firstTime = false;
      fetchData();
    }
    return;
  }, []);

  return (
    <div className="homeContainer">
      <button
        className="notification btn-floating-notifications"
        onClick={showNotificationsModal}
      >
        <span className="material-symbols-outlined">notifications</span>
        <span className="badge">{notifications.length}</span>
      </button>

      <NotificationModal
        show={showNotifications}
        close={closeNotificationModal}
        notifications={notifications}
        removeNotification={removeNotification}
      />

      <div id="div-container" className="container">
        <div className="row">
          {Object.entries(tickets).map(([type, ticketsList]) => (
            <div key={type} className="col-lg-6">
              <div className="column">
                <h2>
                  {type === "new"
                    ? "Novos"
                    : type === "old"
                    ? "Antigos"
                    : type === "urgent"
                    ? "Urgentes"
                    : "Fechados"}
                </h2>
                <div id={type} className="card card-container">
                  {ticketsList.map((ticket, index) => (
                    <Ticket
                      key={String(ticket.ticketID)}
                      created={ticket.created}
                      title={ticket.title}
                      description={ticket.description}
                      problem={ticket.problem}
                      department={ticket.department}
                      ownerID={ticket.ownerID}
                      ticketID={ticket.ticketID}
                      done={doneTicket}
                      remove={removeTicket}
                      reply={replyTicket}
                      buttons={ticket.buttons}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="btn btn-primary btn-floating"
        onClick={handleShowCreateModal}
      >
        <span className="material-symbols-outlined">add</span>
      </button>

      <CreateTicketModal
        show={showCreate}
        create={handleCreateTicket}
        close={handleCloseCreateModal}
      />
    </div>
  );
};

export default Home;
