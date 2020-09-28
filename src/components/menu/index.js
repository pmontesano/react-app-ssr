import React from "react";
import IconSearch from "../../images/icons/search-icon";

const namespace = "ml-search";

const Menu = (props) => {
  console.log("pepe props", props);

  return (
    <div className={namespace}>
      <form>
        <input
          type="text"
          className={`${namespace}__input`}
          value=""
          placeholder="Buscar productos, marcas y más…"
        />
        <button type="submit" className={`${namespace}__button`}>
          <IconSearch /> Buscar
        </button>
      </form>
    </div>
  );
};

export default Menu;
