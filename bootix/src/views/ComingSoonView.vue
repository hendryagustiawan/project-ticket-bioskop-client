<template>
  <section>
    <div class="container pt-3">
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
    </div>
  </section>
</template>

<script>
import cardComingSoon from "../components/CardMoviesComingSoon.vue";
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "../stores/movies";
import paginationButton from "../components/paginationButton.vue";
export default {
  name: "comingSoon",
  computed: {
    ...mapState(useMovieStore, ["moviesComingSoon"]),
  },
  methods: {
    ...mapActions(useMovieStore, ["getMoviesCoomingSoon"]),
  },
  components: {
    cardComingSoon,
    paginationButton,
  },
  created() {
    this.getMoviesCoomingSoon();
  },
};
</script>

<style></style>
