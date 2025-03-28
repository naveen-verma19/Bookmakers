import http from "./httpService";
const apiUrl = process.env.REACT_APP_API_URL;

export function getAllGenres() {
  return http.get(apiUrl + "/genres");
}
