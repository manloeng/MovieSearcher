import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { debounce } from "lodash";

// import * as colors from "../../colors";
import { getMoviesByPopulatrity, getGenreList, getMoviesViaInput } from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default function Discover() {
  // const [keyword, setKeyword] = useState("");
  // const [year, setYear] = useState(0);
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [genreOptions, setGenreOptions] = useState([]);
  const [name, setName] = useState("");

  const ratingOptions = [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ];

  const languageOptions = [
    { id: "GR", name: "Greek" },
    { id: "EN", name: "English" },
    { id: "RU", name: "Russian" },
    { id: "PO", name: "Polish" },
  ];

  useEffect(() => {
    async function fetchData() {
      const {
        data: { results },
      } = await getMoviesByPopulatrity();
      setResults(results);
    }

    async function fetchGenreList() {
      const {
        data: { genres },
      } = await getGenreList();
      setGenreOptions(genres);
    }

    fetchData();
    fetchGenreList();
  }, []);

  const fetchMoviesViaInput = useCallback(
    debounce(async (name) => {
      const { data } = await getMoviesViaInput(name);
      setResults(data.results);
    }, 1000),
    []
  );

  const handleChange = (event) => {
    setName(event.target.value);
    fetchMoviesViaInput(event.target.value);
  };

  return (
    <DiscoverWrapper>
      {/* <MobilePageTitle>Discover</MobilePageTitle> */}
      <MovieFilters>
        <SearchFilters
          genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions}
          handleChange={handleChange}
          name={name}
        />
      </MovieFilters>
      <MovieResults>
        {totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
        <MovieList movies={results || []} genres={genreOptions || []} />
      </MovieResults>
    </DiscoverWrapper>
  );
}

const DiscoverWrapper = styled.main`
  padding: 60px 35px;
`;

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;
