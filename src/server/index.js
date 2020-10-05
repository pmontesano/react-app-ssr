import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import template from "./template";
import axios from "axios";

import App from "../shared/app";
import Listing from "../components/search";

const app = express();

const props = {
  author: {
    name: "Pablo",
    lastname: "Montesano",
  },
};

app.use("/static", express.static(path.resolve(__dirname, "../public")));

app.get("/", (req, res) => {
  const initialState = {};
  const component = ReactDOMServer.renderToString(
    <App {...{ ...initialState }} />
  );

  const html = template(component, initialState);

  res.send(html);
});

app.get("/api/items", (req, res) => {
  const query = req.query;
  axios
    .get("https://api.mercadolibre.com/sites/MLA/search", {
      params: { q: query, limit: 5 },
    })
    .then((response) => {
      // handle success
      res.json(response.data);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
});

app.get("/items", (req, res) => {
  const query = req.query.search;

  axios
    .get(`http://localhost:3000/api/items`, { params: { search: query } })
    .then((response) => {
      const initialState = {
        items: response.data.results,
        ...props,
      };

      const component = ReactDOMServer.renderToString(
        <Listing {...{ ...initialState }} />
      );

      const html = template(component, initialState);
      res.send(html);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
});

const port = 3000;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
