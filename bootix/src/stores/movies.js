import { defineStore } from "pinia";
import axios from "axios";
import Axios from "../config/axios";

export const useMovieStore = defineStore("movies", {
  state: () => {
    return {
      moviesComingSoon: [],
      moviesNowShowing: [],
      movie: {},
    };
  },
  actions: {
    getMoviesCoomingSoon() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=8d080c77bc5c52a616a6f486da7e1509"
        )
        .then(({ data }) => {
          this.moviesComingSoon = data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMoviesNowShowing() {
      Axios.get("/customers/movie")
        .then(({ data }) => {
          this.moviesNowShowing = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMovieId(id) {
      Axios.get(`/customers/movie/${id}`)
        .then(({ data }) => {
          this.movie = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
