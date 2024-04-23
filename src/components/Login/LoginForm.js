import React, { useEffect, useState } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import "./login.css";

import Logo from "../../assets/images/logo.png";

const LoginForm = () => {
  //#region Variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Incorrect username or password.");
  const Navigate = useNavigate();

  //#endregion

  //#region Functions

  const handleSubmit = () => {};
  const handleForgetPassword = () => {};
  //#endregion

  //#region Return
  return (
    <div className="sign-in__wrapper">
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadown p-4 bg-white rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
        />
        <div className="h4 mb-2 text-center">Entrar</div>
        {/* Alert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            {message}
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="text"
            value={username}
            placeholder="Nome de usuário"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Continuar conectado." />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Entrar
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Carregando ...
          </Button>
        )}
        <div className="d-grid justify-content-end">
          <Button
            className="text-muted px-0"
            variant="link"
            onClick={handleForgetPassword}
          >
            Esqueceu sua senha ?
          </Button>
        </div>
      </Form>
      {/* Footer */}
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Made by Dias C | &copy;2024
      </div>
    </div>
  );
  //#endregion
};
export default LoginForm;
