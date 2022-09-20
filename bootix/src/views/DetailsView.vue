<template>
  <section>
    <div class="background-img container-fluid py-5">
      <div class="poster card border-0" style="width: 18rem">
        <img class="card-img-top" :src="movie.imgUrl" alt="Card image cap" />
      </div>
    </div>
    <div class="container pt-3 pb-3">
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
          <iframe width="560" height="315" :src="movie.linkYT"></iframe>
          <button
            style="
              background-color: #ffbb00;
              border-radius: 35px;
              width: 200px;
              height: 50px;
              color: #020916;
              font-weight: 500;
            "
            @click="addBooking(movie.id)"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>

    <div class="container pb-4">
      <h5 style="color: #ffffff" class="pb-4">Photo Gallery</h5>
      <photo-gallery />
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "../stores/movies";
import photoGallery from "../components/photoGallery.vue";
export default {
  name: "detailPage",
  computed: {
    ...mapState(useMovieStore, ["movie"]),
    movieId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(useMovieStore, ["getMovieId", "addBooking"]),
    changeFormatPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
    },
  },
  components: {
    photoGallery,
  },
  created() {
    this.getMovieId(this.movieId);
  },
};
</script>

<style></style>
