import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App"
import Home from "./home/home"

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element ={<App />} />
      <Route path="/home" element ={<Home />} />
    </Routes>
  </Router>,
  document.getElementById("root")
)

