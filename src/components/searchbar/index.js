import React from "react";
// import styled from "styled-components";

// import * as colors from "../../colors";
// import SearchIcon from "../../images/search-icon-yellow.png";
// import CalendarIcon from "../../images/year-icon.png";

export default function SearchBar({ handleChange, name }) {
  return (
    <div className="App">
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}
