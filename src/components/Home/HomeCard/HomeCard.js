import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./homecard.css";

const HomeCard = ({ icon, title, description, route }) => {
  return (
    <Card className="home-card-container">
      <Card.Body>
        <Row>
          <Col className="col-3 text-center justify-content-center align-content-center">
            <div className="btn btn-primary">
              <span className="material-symbols-outlined card-icon">
                {icon}
              </span>
            </div>
          </Col>
          <Col>
            <Row className="card-title fw-bold">{title}</Row>
            <Row className="card-text">{description}</Row>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Link className="link-info" to={route}>
          <span>Veja mais</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default HomeCard;
