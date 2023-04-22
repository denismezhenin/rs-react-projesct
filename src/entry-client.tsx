import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import setupStore from "./store";
import { App } from "./app";
import "./styles/style.scss";

const store = setupStore();

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
