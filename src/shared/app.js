import React from "react";
import { render } from "react-dom";
import Menu from "../components/menu";
import Home from "../views/home";

const App = ({ name, capo }) => {
  return (
    <div class="ml-app">
      <Menu />
      <Home />
    </div>
  );
};

export default App;
