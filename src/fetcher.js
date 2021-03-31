import axios from "axios";
import { api_key, baseUrl } from "./secret.json";
export async function getMoviesByPopulatrity(pageNumber) {
  if (!pageNumber) return await axios.get(`${baseUrl}/popular?api_key=${api_key}`);
  return await axios.get(`${baseUrl}/popular?page=${pageNumber}&api_key=${api_key}`);
}
