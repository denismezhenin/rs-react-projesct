import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import setupStore from "./store";
import { App } from "./app";
import "./styles/style.scss";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState } from "../src/store/index";

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}

const store = setupStore(
  window.__PRELOADED_STATE__ as PreloadedState<RootState>
);
delete window.__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
