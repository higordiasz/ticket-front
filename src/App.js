import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={LoginForm} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
