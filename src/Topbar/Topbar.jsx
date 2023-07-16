import React from "react";
import "./Topbar.css";
import { RecepieState } from "../context/Context";

const Topbar = () => {
  const { receipeState, recepieDispatch } = RecepieState();

  const handleChange = (e) => {
    recepieDispatch({ type: "FETCH_ON", payload: e.target.value });
  };

  const handleSearchChange = (e) => {
    recepieDispatch({ type: "FETCH_SEARCH", payload: e.target.value });
  };

  return (
    <div className="topbar-container">
      <input
        onChange={handleSearchChange}
        className="search-box"
        type="text"
        placeholder="Search the item you want"
      />
      <h3>Filters: </h3>

      <div className="options">
        <div>
          <label>
            <input
              name="filter"
              value="Name"
              type="radio"
              onChange={handleChange}
            />
            Name
          </label>
        </div>

        <div>
          <label>
            <input
              name="filter"
              value="Ingredients"
              type="radio"
              onChange={handleChange}
            />
            Ingredients
          </label>
        </div>

        <div>
          <label>
            <input
              name="filter"
              value="Cuisine"
              type="radio"
              onChange={handleChange}
            />
            Cuisine
          </label>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
