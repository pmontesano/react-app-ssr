import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import template from "./template";
import axios from "axios";
import { listingService, EnvType } from "../shared/services/listingService";

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

const getlistingService = listingService(axios, EnvType.SERVER);

app.get("/", (req, res) => {
  const initialState = {
    ...props,
  };
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
      console.log("pepe response.data", response.data);
      const results = response.data.results.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
          },
        };
      });
      const initialState = {
        ...props,
        categories: response.data.available_filters,
        items: results,
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
