import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard/HomeCard";
import TicketList from "../TicketList/TicketList";
import Template from "../Template/Template";

const Home = () => {
  const [tickets, setTickets] = useState([
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
    {
      title: "Teste",
      description: "Ticket de teste para ver como vai ficar o card de chamado.",
      date: "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      last_modification:
        "Fri May 03 2024 13:52:28 GMT-0300 (Horário Padrão de Brasília)",
      icon: "message",
      id: "ticketID",
    },
  ]);

  const handleTicketNavigate = () => {
    return;
  };
  return (
    <>
      <Template
        content={
          <div className="container p-3">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-5 col-xl m-2">
                <HomeCard
                  icon={"add"}
                  title={"Novos Chamados"}
                  description={"Foram abertos 34 novos chamados."}
                  route={"/home"}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5 col-xl m-2">
                <HomeCard
                  icon={"content_paste"}
                  title={"Chamados Abertos"}
                  description={"Possui 55 chamados abertos."}
                  route={"/home"}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5 col-xl m-2">
                <HomeCard
                  icon={"close"}
                  title={"Chamados Fechados"}
                  description={"Foi solucionado 99 chamados."}
                  route={"/home"}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg- m-2">
                <TicketList
                  navigate={handleTicketNavigate}
                  title={"Atualizados Recentemente"}
                  tickets={tickets}
                />
              </div>
            </div>
          </div>
        }
        name={"Home"}
        showSearch={true}
      />
    </>
  );
};

export default Home;
