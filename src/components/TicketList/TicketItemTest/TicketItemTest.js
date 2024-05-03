import React from "react";
import { Row, Col, Modal } from "react-bootstrap";
import "./ticketitemtest.css";

const TicketItemTest = ({ ticket }) => {
  return (
    <div className="ticketitem">
      <Row className="ticketitem-container">
        <Col className="ticketitem-icon col-2">
          <div className="btn btn-dark">
            <span className="material-symbols-outlined">message</span>
          </div>
        </Col>
        <Col className="col-10">
          <Row>
            <span>Problema no Computador</span>
          </Row>
          <Row>
            <Col>
              <Row>Problema</Row>
              <Row>Computador</Row>
            </Col>
            <Col>
              <Row>Local</Row>
              <Row>Unidade de Saude - Centro</Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default TicketItemTest;
