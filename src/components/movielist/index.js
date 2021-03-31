import React from "react";
import styled from "styled-components";
import MovieItem from "../movieitem";
export default function MovieList({ movies = [] }) {
  return <MoviesWrapper>{movies && movies.map((movie) => <MovieItem movie={movie}></MovieItem>)}</MoviesWrapper>;
}

const MoviesWrapper = styled.div`
  position: relative;
`;
