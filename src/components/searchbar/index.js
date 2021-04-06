import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
// import SearchIcon from "../../images/search-icon-yellow.png";
// import CalendarIcon from "../../images/year-icon.png";

export default function SearchBar({ handleChange, name }) {
  return (
    <SearchBarStyle type="text" value={name} onChange={handleChange} placeholder="Search for Movies"></SearchBarStyle>
  );
}

const SearchBarStyle = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.primaryColor};
  color: ${colors.primaryColor};
`;
