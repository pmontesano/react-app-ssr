import React from "react";
import Menu from "../components/menu";
import Home from "../views/home";

const App = (props) => {
  console.log("a la app pepe-->", props);
  return (
    <div class="ml-app">
      <Menu />
      <Home {...props} />
    </div>
  );
};

export default App;
