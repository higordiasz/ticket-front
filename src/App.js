import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm, Home } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={LoginForm} />
          <Route path="/home" exact Component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
