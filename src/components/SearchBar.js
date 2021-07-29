import React from "react";

function SearchBar({handleSortSelect, handleFilterDropdown}) {
  return (
    <div>
      <strong>Sort by:</strong>

      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleSortSelect}
        />
        Alphabetically
      </label>


      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handleSortSelect}
        />
        Price
      </label>



      <br />


      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterDropdown}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
