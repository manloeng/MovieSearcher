import React from "react";
import styled from "styled-components";

export default function CheckBox({ genres = [] }) {
  return (
    <CheckboxCont>
      {genres.map((genre) => (
        <li key={genre.name}>{genre.name}</li>
      ))}
    </CheckboxCont>
  );
}

const CheckboxCont = styled.ul`
  position: relative;
`;
