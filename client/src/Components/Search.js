import React from "react";

const Search = ({ query, setQuery }) => {
  return (
    <input
      initial={{ y: -10 }}
      animate={{ y: 10 }}
      type="text"
      placeholder="Search your expenses"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    ></input>
  );
};

export default Search;
