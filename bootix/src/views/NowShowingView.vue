<template>
  <section>
    <div class="container pt-3">
      <div class="now-showing pb-4">
        <div class="container">
          <h5 style="color: #ffffff" class="pt-3 pb-4">Now Showing</h5>
          <div
            class="card-items row row-cols-1 row-cols-md-4 g-4 justify-content-around pb-4"
          >
            <card-now-showing
              v-for="moviesNow in moviesNowShowing"
              :key="moviesNow.id"
              :moviesNow="moviesNow"
            />
          </div>
        </div>
        <pagination-button />
      </div>
    </div>
  </section>
</template>

<script>
import cardNowShowing from "../components/CardMoviesNowShowing.vue";
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "../stores/movies";
import paginationButton from "../components/paginationButton.vue";
export default {
  name: "comingSoon",
  computed: {
    ...mapState(useMovieStore, ["moviesNowShowing"]),
  },
  methods: {
    ...mapActions(useMovieStore, ["getMoviesNowShowing"]),
  },
  components: {
    cardNowShowing,
    paginationButton,
  },
  created() {
    this.getMoviesNowShowing();
  },
};
</script>

<style></style>
