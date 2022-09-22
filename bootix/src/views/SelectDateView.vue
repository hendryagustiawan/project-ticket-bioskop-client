<template>
  <section>
    <div class="background-img container-fluid py-5">
      <div class="poster card border-0" style="width: 18rem">
        <img
          class="card-img-top"
          :src="booking.Movie.imgUrl"
          alt="Card image cap"
        />
      </div>
    </div>
    <div class="container pt-3 pb-3">
      <div class="title pt-4 pb-3">
        <h4 style="color: #ffffff">
          {{ booking.Movie.title }}
        </h4>
      </div>
      <button
        style="
          border-radius: 35px;
          width: 200px;
          height: 50px;
          color: #ffbb00;
          background-color: #182131;
        "
      >
        {{ booking.Movie.genre }}
      </button>
      <p class="pt-4 pb-3" style="color: #ffffff">
        {{ booking.Movie.synopsis }}
      </p>
      <div class="items d-flex">
        <div class="list">
          <hr class="line" />
          <h5 style="color: #ffffff">Select Date</h5>
          <div class="container day justify-content-around">
            <button @click.prevent="day = 'Today'">TODAY</button>
            <button @click.prevent="day = 'Friday'">FRIDAY</button>
            <button @click.prevent="day = 'Saturday'">SATURDAY</button>
            <button @click.prevent="day = 'Sunday'">SUNDAY</button>
            <button @click.prevent="day = 'Monday'">MONDAY</button>
            <button @click.prevent="day = 'Tuesday'">TUESDAY</button>
          </div>
          <hr class="line" />
          <p style="color: #ffffff">CGV Mataram</p>
          <div class="button-time">
            <button @click.prevent="time = '04:30 pm'">
              <router-link
                style="color: #27ae60; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                04:30 pm</router-link
              >
            </button>
            <button @click.prevent="time = '17:30 pm'">
              <router-link
                style="color: #27ae60; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                17:30 pm</router-link
              >
            </button>
            <button @click.prevent="time = '02:40 pm'">
              <router-link
                style="color: #27ae60; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                02:40 pm</router-link
              >
            </button>
            <button @click.prevent="time = '15:30 pm'">
              <router-link
                style="color: #27ae60; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                15:30 pm</router-link
              >
            </button>
            <button @click.prevent="time = '16:49 pm'">
              <router-link
                style="color: #27ae60; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                16:49 pm</router-link
              >
            </button>
            <hr class="line" />
            <p style="color: #ffffff">Cinema XXI Mall Mataram</p>
            <button @click.prevent="time = '09:30 pm'">
              <router-link
                style="color: #ffbb00; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                09:30 pm</router-link
              >
            </button>
            <button @click.prevent="time = '12:00 pm'">
              <router-link
                style="color: #ffbb00; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                12:00 pm</router-link
              >
            </button>
            <button @click.prevent="time = '15:30 pm'">
              <router-link
                style="color: #ffbb00; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                15:30 pm</router-link
              >
            </button>
            <button @click.prevent="time = '17:40 pm'">
              <router-link
                style="color: #ffbb00; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                17:40 pm</router-link
              >
            </button>
            <button @click.prevent="time = '20:00 pm'">
              <router-link
                style="color: #ffbb00; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                20:00 pm</router-link
              >
            </button>
          </div>
          <!-- <hr class="line" /> -->
        </div>
        <div class="location">
          <h5 style="color: #ffffff">Location</h5>
          <div class="mapouter pt-2">
            <div class="gmap_canvas">
              <iframe
                width="400"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=CGV%20Cinemas%20-%20Transmart%20Mataram&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe
              ><br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--! Now Showing -->
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="now-showing">
        <div class="container">
          <h5 style="color: #ffffff" class="pt-5 pb-4 text-center">
            More Movies
          </h5>
          <div
            class="card-items row row-cols-1 row-cols-md-4 g-4 justify-content-around"
          >
            <card-now-showing
              v-for="moviesNow in moviesNowShowing"
              :key="moviesNow.id"
              :moviesNow="moviesNow"
            />
          </div>
        </div>
        <pagintaion-slide />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useMovieStore } from "../stores/movies";
import pagintaionSlide from "../components/pagintaionSlide.vue";
import cardNowShowing from "../components/CardMoviesNowShowing.vue";
export default {
  name: "dateView",

  computed: {
    ...mapState(useMovieStore, ["booking", "moviesNowShowing"]),
    ...mapWritableState(useMovieStore, ["day", "time"]),
    movieId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(useMovieStore, ["getBookingId", "getMoviesNowShowing"]),
  },
  components: {
    pagintaionSlide,
    cardNowShowing,
  },
  created() {
    this.getBookingId(this.movieId);
    this.getMoviesNowShowing();
  },
};
</script>

<style>
.mapouter {
  position: relative;
  text-align: right;
  height: 300px;
  width: 400px;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 300px;
  width: 400px;
}
</style>
