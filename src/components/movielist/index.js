import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMoviesByPopulatrity, getGenreList } from "../../fetcher";

import MovieItem from "../movieitem";
import Checkbox from "../checkbox";

export default function MovieList() {
  const [data, setData] = useState();
  const [genres, setGenres] = useState();

  useEffect(() => {
    async function fetchData() {
      const { data } = await getMoviesByPopulatrity();
      setData(data);
    }

    async function fetchGenreList() {
      const {
        data: { genres },
      } = await getGenreList();
      setGenres(genres);
    }

    fetchData();
    fetchGenreList();
  }, []);

  return (
    <MoviesWrapper>
      {data && data.results.map((movie) => <MovieItem movie={movie}></MovieItem>)}

      <div>
        {/* search bar */}
        <Checkbox genres={genres}></Checkbox>
      </div>
    </MoviesWrapper>
  );
}

const MoviesWrapper = styled.div`
  position: relative;
`;
