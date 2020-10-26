import React, { useState } from "react";
import IconSearch from "../../images/icons/search-icon";

const namespace = "ml-menu";

const Menu = ({ onchangeInput, onClick }) => (
  <div className={namespace}>
    <a href="#" className="logo">
      <img src="../static/images/logo.png" alt="Mercadolibre" />
    </a>

    <div className={`${namespace}-search`}>
      <input
        type="text"
        className={`${namespace}-search__input`}
        placeholder="Buscar productos, marcas y más…"
        onChange={(e) => onchangeInput(e.target.value)}
      />
      <button
        onClick={onClick}
        type="submit"
        className={`${namespace}-search__button`}
      >
        <IconSearch />
      </button>
    </div>
  </div>
);

export default Menu;
