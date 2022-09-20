<template>
  <div>
    <button
      @click="handleChangePage(page - 1)"
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      @click="handleChangePage(page + 1)"
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "../stores/movies";
export default {
  name: "pagintaionSlide",
  computed: {
    ...mapState(useMovieStore, ["page", "totalPage"]),
  },
  methods: {
    ...mapActions(useMovieStore, ["getMoviesNowShowing"]),
    handleChangePage(pageTo) {
      this.getMoviesNowShowing(pageTo);
    },
  },
};
</script>

<style></style>
