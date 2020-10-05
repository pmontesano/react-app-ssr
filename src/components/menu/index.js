import React, { useState } from "react";
import IconSearch from "../../images/icons/search-icon";

const namespace = "ml-search";

const Menu = (props) => {
  const [value, setValue] = useState();

  const onchangeInput = (value) => {
    console.log("tipeando...", value);
    setValue(value);
  };

  return (
    <div className={namespace}>
      <form action="/items" method="get">
        <input
          type="text"
          className={`${namespace}__input`}
          value={value}
          placeholder="Buscar productos, marcas y más…"
          name={"name"}
          onChange={(e) => onchangeInput(e.target.value)}
        />
        <input hidden name="search" value={value} />
        <button type="submit" className={`${namespace}__button`}>
          <IconSearch /> Buscar
        </button>
      </form>
    </div>
  );
};

export default Menu;
