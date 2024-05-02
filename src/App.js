import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm, Home, Ticket } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={LoginForm} />
          <Route path="/home" exact Component={Home} />
          <Route path="/ticket" exact Component={Ticket} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
