import React from "react";
import { Row, Col, Card } from "react-bootstrap";
//import TicketItem from "./TicketItem/TicketItem";
import TicketItemTest from "./TicketItemTest/TicketItemTest";
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
        <div className="ticket-container-test">
          {tickets.map((ticket) => {
            return <TicketItemTest ticket={ticket} />;
          })}
        </div>
      </Card.Body>
    </Card>
  );
};

export default TicketList;
