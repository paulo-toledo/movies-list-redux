import axios from "axios";

const API_KEY = "7ab5ce157b70ddf840f52e2e9d6fe507";
const BASE_URL = "https://api.themoviedb.org/3/";

const withBaseUrl = (path: string) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }
  
  static getMovieDetails(id: any){
    return axios.get(withBaseUrl(`movie/${id}`));
  }
}
