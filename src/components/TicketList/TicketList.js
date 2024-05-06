import React from "react";
import { Row, Col, Card } from "react-bootstrap";
//import TicketItem from "./TicketItem_Old/TicketItem";
import TicketItem from "./TicketItem/TicketItem";
import "./ticketlist.css";

const TicketList = ({ title, tickets, navigate }) => {
  return (
    <Card className="ticketlist-container">
      <Card.Header>
        <Card.Title>
          <span>{title}</span>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="ticket-container">
          {tickets.map((ticket) => {
            return <TicketItem ticket={ticket} />;
          })}
        </div>
      </Card.Body>
    </Card>
  );
};

export default TicketList;
