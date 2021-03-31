import React, { useState } from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";

export default function ExpandableFilter({ genres = [] }) {
  const [filtersShown, setFiltersShown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 768;
      setIsMobile(isMobile);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      {isMobile && (
        <button onClick={() => setFiltersShown(!filtersShown)}>
          <FilterIcon src="/images/filter-icon.png" alt="hamburger menu"></FilterIcon>
        </button>
      )}
      {isMobile && filtersShown && <Checkbox genres={genres}></Checkbox>}

      {!isMobile && <Checkbox genres={genres}></Checkbox>}
    </>
  );
}

const FilterIcon = styled.img`
  height: 25px;
  width: 25px;
`;
