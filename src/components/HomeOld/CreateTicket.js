import React from "react";
import { Row, Col, Form, FloatingLabel, Modal, Button } from "react-bootstrap";

const CreateTicketModal = ({ show, create, close }) => {
  const handleCreate = () => create();
  const handleClose = () => close();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Notificações</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Form.Select aria-label="Select Problem">
              <option>Selecione o problema...</option>
              <option value="1">Computador</option>
              <option value="2">Impressora</option>
              <option value="3">Outros</option>
            </Form.Select>
          </Row>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default CreateTicketModal;
