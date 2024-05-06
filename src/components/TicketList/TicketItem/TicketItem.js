import React from "react";
import { Row, Col, Modal, Dropdown } from "react-bootstrap";
import "./ticketitem.css";

const TicketItemTest = ({ ticket }) => {
  return (
    <div className="ticketitem">
      <Row className="ticketitem-container">
        <Col className="ticketitem-icon col-2 flex-column justify-content-center align-content-center">
          <div className="btn btn-dark">
            <span className="material-symbols-outlined">message</span>
          </div>
        </Col>
        <Col className="col-10 flex-column align-content-center justify-content-center">
          <Row className="item_title">
            <span>Problema no Computador</span>
          </Row>
          <Row>
            <Col className="col-5">
              <Row className="item_info_title">Problema</Row>
              <Row className="item_info_text">Computador</Row>
            </Col>
            <Col className="col-7 ">
              <Row className="item_info_title">Local</Row>
              <Row className="item_info_text">Unidade de Saude - Centro</Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default TicketItemTest;
