import React from "react";

const Search = ({ items, author }) => {
  console.log("search pepe-->", items);

  return (
    <div>
      Search
      {items && items.map((item) => {
        <li>{item.title}</li>

      })}
      
    </div>
  );
};

export default Search;
