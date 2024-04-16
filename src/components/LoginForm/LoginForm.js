import React, { useState } from "react";
import "../../styles/login.css";

const LoginForm = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setusername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3333/login", {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("Credenciais inválidas. Por favor, tente novamente.");
      }

      // Autenticação bem-sucedida
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <p id="heading">Login</p>
        <div>{error && <p className="error-message">{error}</p>}</div>
        <div className="field">
          <span className="material-symbols-outlined"> alternate_email </span>
          <input
            autoComplete="off"
            placeholder="Username"
            className="input-field"
            type="text"
            onChange={handleUsernameChange}
          />
        </div>
        <div className="field">
          <span className="material-symbols-outlined"> lock_open </span>
          <input
            placeholder="Password"
            className="input-field"
            autoComplete="off"
            type="password"
            onChange={handlePasswordChange}
          />
        </div>
        <div className="btn">
          <button className="button1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
          <button className="button2">Sign Up</button>
        </div>
        <button className="button3">Forgot Password</button>
      </form>
    </div>
  );
};

export default LoginForm;
