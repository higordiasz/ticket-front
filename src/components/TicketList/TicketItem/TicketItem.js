import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./ticketitem.css";

const TicketItem = ({ ticket }) => {
  return (
    <Row className="ticketitem-container">
      <Col className="ticketitem-icon col-sm-12 col-md-12 col-lg-2 col-xl-1">
        <div className="btn btn-dark">
          <span className="material-symbols-outlined">message</span>
        </div>
      </Col>
      <Col className="ticketitem-content">
        <Row className="ticketitem-header">
          <div className="ticketitem-title">
            <span>Computador com defeito</span>
          </div>
        </Row>
        <Row className="ticketitem-description">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </span>
        </Row>
        <Row className="ticketitem-info">
          <Col className="ticketitem-problem">
            <span>
              <span className="info-title">Problema: </span>Computador
            </span>
          </Col>
          <Col className="ticketitem-local">
            <span>
              <span className="info-title">Local: </span>Unidade de Saude -
              Centro
            </span>
          </Col>
        </Row>
        <Row className="ticketitem-info">
          <Col className="ticketitem-create">
            <span>
              <span className="info-title">Criado em: </span>03/05/2024 14:29
            </span>
          </Col>
          <Col className="ticketitem-edit">
            <span>
              <span className="info-title">Atualizado em: </span>03/05/2024
              14:30
            </span>
          </Col>
        </Row>
      </Col>
      <Row className="ticketitem-footer"></Row>
    </Row>
  );
};

export default TicketItem;
