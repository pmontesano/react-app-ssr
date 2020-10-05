import React from "react";
import ReactDOM from "react-dom";
import Search from "../components/search";

const initialState = window.__INITIAL__DATA__.initialState;

ReactDOM.hydrate(
  <Search {...{...initialState}} />,
  document.getElementById("root")
);
