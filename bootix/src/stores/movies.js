import { defineStore } from "pinia";
import axios from "axios";
import Axios from "../config/axios";

export const useMovieStore = defineStore("movies", {
  state: () => {
    return {
      moviesComingSoon: [],
      moviesNowShowing: [],
      movie: {},
      day: "",
      time: "",
      seats: "",
      booking: {},
      page: 1,
      totalPage: 1,
    };
  },
  actions: {
    getMoviesCoomingSoon(page = 1) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=8d080c77bc5c52a616a6f486da7e1509&page=" +
            page
        )
        .then(({ data }) => {
          this.moviesComingSoon = data.results;
          this.page = data.page;
          this.totalPage = data.total_pages;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMoviesNowShowing(page = 1) {
      Axios.get("/customers/movie?page=" + page)
        .then(({ data }) => {
          let { rows, totalPage } = data;
          this.moviesNowShowing = rows;
          this.page = page;
          this.totalPage = totalPage;
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
    addBooking(id) {
      Axios.post(
        "/customers/booking/" + id,
        {},
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
        .then(() => {
          this.router.push("/movie/selectdate");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBooking() {
      Axios.get("/customers/booking/", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          this.booking = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
