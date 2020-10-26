import React from "react";

const namespace = "ml-search__list";

const Search = ({ items, breadcrumb }) => {
  console.log("search initialState", items);
  console.log("search categories", breadcrumb);

  return (
    <div>
      <ul className="ml-bredcrumbs">
        {breadcrumb.length > 0 &&
          breadcrumb.map((cat) => <li key={cat.name}>{cat.name}</li>)}
      </ul>
      <ul className={namespace}>
        {items.length > 0 &&
          items.map((item) => (
            <li key={item.title}>
              <a href={`/item/${item.id}`}>{item.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
