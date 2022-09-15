<template>
  <section>
    <div class="container pt-3 pb-3">
      <div class="card border-0" style="width: 18rem">
        <img class="card-img-top" :src="movie.imgUrl" alt="Card image cap" />
      </div>
      <div class="title pt-4 pb-3">
        <h4 style="color: #ffffff">
          {{ movie.title }}
        </h4>
      </div>
      <button
        class="me-5"
        style="
          border-radius: 35px;
          width: 200px;
          height: 50px;
          color: #ffbb00;
          background-color: #182131;
        "
      >
        {{ movie.genre }}
      </button>
      <button
        style="
          border-radius: 35px;
          width: 200px;
          height: 50px;
          color: #ffbb00;
          background-color: #182131;
        "
      >
        {{ changeFormatPrice(movie.price) }}
      </button>
      <p class="pt-4 pb-3" style="color: #ffffff">
        {{ movie.synopsis }}
      </p>
      <div class="items d-flex">
        <div class="list">
          <hr class="line" />
          <p>Directed : {{ movie.director }}</p>
          <hr class="line" />
          <p>Duration : {{ movie.duration }} minutes</p>
          <hr class="line" />
          <p>Production Company : {{ movie.Production.name }}</p>
          <hr class="line" />
          <p>Writers : {{ movie.writer }}</p>
          <hr class="line" />
          <p>Cast : {{ movie.cast }}</p>
          <hr class="line" />
          <p>Producer : {{ movie.producer }}</p>
        </div>
        <div class="trailer">
          <img
            src="https://i.ytimg.com/vi/6Sq4FGWvHXA/maxresdefault.jpg"
            alt="trailer"
            class="mb-4"
            style="width: 350px; height: 200px"
          />
          <button
            style="
              background-color: #ffbb00;
              border-radius: 35px;
              width: 200px;
              height: 50px;
              color: #020916;
              font-weight: 500;
            "
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "../stores/movies";
export default {
  name: "detailPage",
  computed: {
    ...mapState(useMovieStore, ["movie"]),
    movieId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(useMovieStore, ["getMovieId"]),
    changeFormatPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
    },
  },
  created() {
    this.getMovieId(this.movieId);
  },
};
</script>

<style></style>
