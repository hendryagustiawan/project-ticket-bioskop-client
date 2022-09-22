import { defineStore } from "pinia";
import axios from "axios";
import Axios from "../config/axios";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({});

export const useMovieStore = defineStore("movies", {
  state: () => {
    return {
      moviesComingSoon: [],
      moviesNowShowing: [],
      myBooking: [],
      movie: {},
      day: "",
      time: "",
      seats: "",
      booking: {},
      page: 1,
      totalPage: 1,
      payment_token: null,
      price: null,
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
          toaster.error(err.response.data.message, { position: "top" });
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
          toaster.error(err.response.data.message, { position: "top" });
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
          this.router.push({ name: "select date" });
        })
        .catch((err) => {
          toaster.error(err.response.data.message, { position: "top" });
        });
    },
    getBookingId(id) {
      Axios.get("/customers/booking/" + id, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          this.booking = data;
        })
        .catch((err) => {
          toaster.error(err.response.data.message, { position: "top" });
        });
    },
    getMyBooking() {
      Axios.get("/customers/booking/", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          this.myBooking = data;
        })
        .catch((err) => {
          toaster.error(err.response.data.message, { position: "top" });
        });
    },
    getTokenPayment() {
      Axios.post("/customers/payment", {
        price: this.booking.Movie.price,
      })
        .then(({ data }) => {
          this.payment_token = data.token;
        })
        .catch((err) => {
          toaster.error(err.response.data.message, { position: "top" });
        });
    },
    handleDelete(id) {
      Axios.delete("/customers/booking/" + id, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(() => {
          this.router.push({ name: "home" });

          this.getMyBooking();
        })
        .catch((err) => {
          toaster.error(err.response.data.message, { position: "top" });
        });
    },
  },
});
