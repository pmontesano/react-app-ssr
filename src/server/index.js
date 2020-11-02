import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import template from "./template";
import axios from "axios";
import { listingService, EnvType } from "../shared/services/listingService";
import { getItemsFromResponse } from "./utils";

import App from "../shared/app";

const app = express();

const props = {
  author: {
    name: "Pablo",
    lastname: "Montesano",
  },
  items: [],
  categories: [],
};

app.use("/static", express.static(path.resolve(__dirname, "../public")));
// app.use("/static", express.static(path.join(__dirname, "../src/images")));

const getlistingService = listingService(axios, EnvType.SERVER);

app.get("/", (req, res) => {
  const initialState = {
    ...props,
  };

  console.log("pepe", path.join(__dirname, "../src/static"));
  const component = ReactDOMServer.renderToString(
    <App {...{ ...initialState }} />
  );

  const html = template(component, initialState);

  res.send(html);
});

app.get("/api/items", (req, res) => {
  getlistingService
    .search({ search: req.query.search, limit: 5 })
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
  getlistingService
    .search({ search: req.query.search, limit: 5 })
    .then((response) => {
      const initialState = {
        ...props,
        categories: response.data.available_filters,
        items: getItemsFromResponse(response),
      };

      const component = ReactDOMServer.renderToString(
        <App {...{ ...initialState }} />
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
