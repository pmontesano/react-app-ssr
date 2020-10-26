import React, { useState } from "react";
import Menu from "../components/menu";
import Search from "../components/search";
import "../styles/app.scss";
import axios from "axios";
import { listingService, EnvType } from "../shared/services/listingService";

const getlistingService = listingService(axios, EnvType.CLIENT);

const App = (initialState) => {
  const [value, setValue] = useState("");
  const [state, setState] = useState(initialState);

  const onClick = () => {
    getlistingService
      .search({ search: value, limit: 5 })
      .then((response) => {
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
        setState({
          ...state,
          categories: response.data.available_filters,
          items: results,
        });

        history.pushState(
          {
            ...state,
            categories: response.data.available_filters,
            items: results,
          },
          "search page",
          `/items?search=${value}`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="ml-app">
      <Menu
        value={value}
        onchangeInput={(value) => setValue(value)}
        onClick={onClick}
      />
      <Search {...{ items: state.items, breadcrumb: state.categories }} />
    </div>
  );
};

export default App;
