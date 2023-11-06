import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";
const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <Router>
    <App />
  </Router>
);
