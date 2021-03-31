import axios from "axios";

async function getMoviesByPopulatrity() {
  return await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.api_key}`);
}

module.export = { getMoviesByPopulatrity };
