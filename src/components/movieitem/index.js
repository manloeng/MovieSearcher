import React from "react";
import styled from "styled-components";

export default function MovieItem({ movie }) {
  return (
    // Complete the MovieItem component
    <MovieItemWrapper key={movie.title}>
      <LeftCont></LeftCont>
      <RightCont></RightCont>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const RightCont = styled.div`
  display: inline-block;
`;
