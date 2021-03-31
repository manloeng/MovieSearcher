import axios from "axios";

async function getMoviesByPopulatrity() {
  return await axios.get("https://www.themoviedb.org/documentation/api/discover/movie?sort_by=popularity.desc");
}

module.export = { getMoviesByPopulatrity };
