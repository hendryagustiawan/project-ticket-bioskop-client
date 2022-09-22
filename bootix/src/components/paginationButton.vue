<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" @click="handleChangePage(page - 1, 'Previous')"
          >Previous</a
        >
      </li>
      <li class="page-item">
        <a class="page-link" @click="handleChangePage(buttonNumber)">{{
          buttonNumber
        }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="handleChangePage(buttonNumber + 1)">{{
          buttonNumber + 1
        }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="handleChangePage(buttonNumber + 2)">{{
          buttonNumber + 2
        }}</a>
      </li>
      <li class="page-item" @click="handleChangePage(page + 1, 'next')">
        <a class="page-link">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "../stores/movies";
export default {
  name: "paginationButton",
  data() {
    return {
      buttonNumber: 1,
    };
  },
  computed: {
    ...mapState(useMovieStore, ["page", "totalPage"]),
  },
  methods: {
    ...mapActions(useMovieStore, [
      "getMoviesCoomingSoon",
      "getMoviesNowShowing",
    ]),
    handleChangePage(pageTo, button) {
      this.getMoviesCoomingSoon(pageTo);
      if (button === "Previous") {
        this.buttonNumber -= 1;
      } else if (button === "next") {
        this.buttonNumber += 1;
      }
      this.getMoviesNowShowing(pageTo);
    },
  },
};
</script>

<style></style>
