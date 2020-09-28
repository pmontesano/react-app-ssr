import React from "react";
import ReactDOM from "react-dom";
import App from "../shared/app";

const initialState = window.__INITIAL__DATA__.initialState;

ReactDOM.hydrate(
  <App {...{...initialState}} />,
  document.getElementById("root")
);
