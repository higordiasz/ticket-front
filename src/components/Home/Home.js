import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";
import API from "../../api";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

const Home = () => {
  const [token, setToken] = useState("");
  const [tickets, setTickets] = useState({
    new: [],
    urgent: [],
    old: [],
    closed: [],
  });
  var firstTime = true;
  const navigate = useNavigate();

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const addTicket = (ticketID, ownerID, title, description, created, type) => {
    const newTicket = {
      ticketID: ticketID,
      ownerID: ownerID,
      title: title,
      description: description,
      created: created,
      type: type,
    };
    const newTickets = { ...tickets };
    newTickets[type].push(newTicket);
    setTickets(newTickets);
  };

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
          closed[i].created,
          "closed"
        );
      }
    }
  };

  const checkToken = async (storedToken) => {
    let valid = await API.Controllers.Login.checkLogin(storedToken);
    if (!valid.valid) return navigate("/");
    await sleep(100);
    await loadAllTickets(storedToken);
    return;
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const fetchData = async () => {
      await checkToken(storedToken);
    };
    setToken(storedToken);
    if (firstTime) {
      firstTime = false;
      fetchData();
    }
    return;
  }, []);

  return (
    <div className="homeContainer">
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
                      title={ticket.title}
                      created={ticket.created}
                      description={ticket.description}
                      ownerID={ticket.ownerID}
                      ticketID={ticket.ticketID}
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
        data-togle="modal"
        data-target="#novoTicketModal"
      >
        <span className="material-symbols-outlined">add</span>
      </button>
      <div
        className="modal fade"
        id="novoTicketModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="novoTicketModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="novoTicketModalLabel">
                Novo Ticket de Suporte
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Fechar"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="formNovoTicket">
                <div className="form-group">
                  <label htmlFor="titulo">Título:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="descricao">Descrição:</label>
                  <textarea
                    className="form-control"
                    id="descricao"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Criar Ticket
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
