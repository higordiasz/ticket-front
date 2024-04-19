import React, { useEffect, useState } from "react";
import API from "../../api";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

const LoginForm = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const checkToken = async (storedToken) => {
    let valid = await API.Controllers.Login.checkLogin(storedToken);
    if (valid.valid) return navigate("/home");
    return;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token);
    }
  });

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const handleUsernameChange = (event) => {
    setusername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let login = await API.Controllers.Login.tryLogin(username, password);
    if (login.error) {
      setError(login.message);
    } else {
      localStorage.setItem("token", login.token);
      await sleep(300);
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
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
