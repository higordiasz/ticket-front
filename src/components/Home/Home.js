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
  const navigate = useNavigate();
  const checkToken = async (storedToken) => {
    let valid = await API.Controllers.Login.checkLogin(storedToken);
    if (!valid.valid) return navigate("/");
    setToken(storedToken);
    return;
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    /*const fetchData = async () => {
      await checkToken(storedToken);
    };
    fetchData();*/
    console.log("rodando");
    return;
  }, []);

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
    newTickets[type] = [...newTickets[type], newTicket];
    setTickets(newTickets);
  };

  return (
    <div className="homeContainer">
      <div className="container">
        <div className="row">
          {Object.entries(tickets).map(([type, ticketsList]) => (
            <div className="col-lg-6">
              <div className="column">
                <h2>
                  {type == "new"
                    ? "Novos"
                    : type == "old"
                    ? "Antigos"
                    : type == "urgent"
                    ? "Urgentes"
                    : "Fechados"}
                </h2>
                <div id={type} className="card card-container">
                  {ticketsList.map((ticket, index) => (
                    <Ticket
                      key={index}
                      title={ticket.title}
                      created={ticket.created}
                      description={ticket.description}
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
        tabindex="-1"
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
                  <label for="titulo">Título:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="descricao">Descrição:</label>
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
