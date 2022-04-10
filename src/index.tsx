import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/scss/style.scss";

import App from "./components/App";

import { store } from "./app/store";

// Используется ReactDOM.render, а не createRoot, потому что с его подключением возникли проблемы,
// а особенности React 18 все равно не задействуются в этом проекте.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
