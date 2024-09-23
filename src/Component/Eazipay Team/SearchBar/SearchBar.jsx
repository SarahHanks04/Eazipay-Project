import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchEmployee } from "../Slice/Slice";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(searchEmployee(e.target.value));
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search employees..."
      className="search-input"
    />
  );
};

export default SearchBar;
