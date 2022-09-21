<template>
  <section>
    <div class="header">
      <!--?image -->
      <div class="container">
        <div class="col-12">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="3000">
                <img
                  src="https://www.fajarpendidikan.co.id/wp-content/uploads/2021/12/Black-Panther-Wakanda-Forever.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img
                  src="https://images.thedirect.com/media/article_full/spider-man-no-way-home-tobey-maguire-andrew-garfield_eukZd6T.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img
                  src="https://entertainmentfunonline.co.in/wp-content/uploads/2022/02/Doctor-Strange-In-Multiverse-Of-Madness-Entertainment-Fun-Online.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--! Now Showing -->
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="now-showing">
        <div class="container">
          <h5 style="color: #ffffff" class="pt-5 pb-4">Now Showing</h5>
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

    <!--! Coming Soon -->
    <div class="coming-soon pb-3">
      <div class="container">
        <h5 style="color: #ffffff" class="pb-4">Coming Soon</h5>
        <div
          class="card-items row row-cols-1 row-cols-md-4 g-4 justify-content-around pb-4"
        >
          <card-coming-soon
            v-for="moviesComing in moviesComingSoon"
            :key="moviesComing.id"
            :moviesComing="moviesComing"
          />
        </div>
      </div>
      <pagination-button />
    </div>
  </section>
</template>

<script>
import cardNowShowing from "../components/CardMoviesNowShowing.vue";
import cardComingSoon from "../components/CardMoviesComingSoon.vue";
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "../stores/movies";
import paginationButton from "../components/paginationButton.vue";
import pagintaionSlide from "../components/pagintaionSlide.vue";
export default {
  name: "homePage",
  computed: {
    ...mapState(useMovieStore, ["moviesComingSoon", "moviesNowShowing"]),
  },
  methods: {
    ...mapActions(useMovieStore, [
      "getMoviesCoomingSoon",
      "getMoviesNowShowing",
    ]),
  },
  components: {
    cardComingSoon,
    cardNowShowing,
    paginationButton,
    pagintaionSlide,
  },
  created() {
    this.getMoviesCoomingSoon();
    this.getMoviesNowShowing();
  },
};
</script>

<style></style>
