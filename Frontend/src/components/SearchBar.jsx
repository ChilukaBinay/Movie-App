import React, { useState } from "react";
import "./SearchBar.css";
const SearchBar = ({ input, setInput, handleSearch }) => {
  return (
    <div>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search movies..."
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
