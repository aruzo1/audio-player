import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./app";
import "styles/variables.css";
import "styles/global.css";
import "styles/reset.css";

axios.defaults.baseURL = "/api/";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
