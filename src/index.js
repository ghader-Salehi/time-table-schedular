import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
