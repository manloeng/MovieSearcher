import React from "react";
import styled from "styled-components";

export default function MovieItem({ movie }) {
  return (
    <MovieItemWrapper key={movie.id}>
      <LeftCont>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie images"></img>
      </LeftCont>
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
