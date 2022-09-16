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

    <div class="container pb-4">
      <h5 style="color: #ffffff" class="pb-4">Photo Gallery</h5>
      <div
        class="container photo-gallery card-items row row-cols-1 row-cols-md-4 g-4 justify-content-between"
      >
        <div class="col mb-3" style="width: 18rem">
          <div class="card border-0">
            <div class="view overlay">
              <img
                class="card-img-top"
                src="https://www.filmibeat.com/img/2021/12/andrewgarfield1-1640588969.jpg"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
        <div class="col mb-3" style="width: 18rem">
          <div class="card border-0">
            <div class="view overlay">
              <img
                class="card-img-top"
                src="https://cdn.kincir.com/2/jCRBzwBph2fz38FhrJLSx1I34IPQ2VSQxfyUO0_JThE/transform/rs:fit:764/src/production/2020-08/1329x930_190bc45f8a492a33ad7eec7a5f734f22325901f6.jpg"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
        <div class="col mb-3" style="width: 18rem">
          <div class="card border-0">
            <div class="view overlay">
              <img
                class="card-img-top"
                src="https://cdn.mos.cms.futurecdn.net/63Yarm7XTZRSidLUd8zHxa.jpg"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
        <div class="col mb-3" style="width: 18rem">
          <div class="card border-0">
            <div class="view overlay">
              <img
                class="card-img-top"
                src="https://static.republika.co.id/uploads/images/inpicture_slide/cuplikan-adegan-film-terbang-menembus-angin-_180113055221-812.jpg"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
        <div class="col mb-3" style="width: 18rem">
          <div class="view overlay">
            <img
              class="card-img-top"
              src="https://cdn-image.hipwee.com/wp-content/uploads/2018/05/hipwee-The-Gift-1.jpg"
              alt="Card image cap"
            />
          </div>
        </div>
        <div class="col mb-3" style="width: 18rem">
          <div class="card border-0">
            <img
              class="card-img-top"
              src="https://awsimages.detik.net.id/community/media/visual/2019/07/11/74d3ace1-0a7e-49ed-91ab-e9ca2aca9768_43.jpeg?w=700&q=90"
              alt="Card image cap"
            />
          </div>
        </div>
        <div class="col mb-3" style="width: 18rem">
          <div class="card border-0">
            <div class="view overlay">
              <img
                class="card-img-top"
                src="https://t-2.tstatic.net/jogja/foto/bank/images/sinopsis-film-teman-tapi-menikah-2.jpg"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
        <div class="col mb-3" style="width: 18rem">
          <div class="card border-0">
            <div class="view overlay">
              <img
                class="card-img-top"
                src="https://cdn-2.tstatic.net/pekanbaru/foto/bank/images/film-5cm.jpg"
                alt="Card image cap"
              />
            </div>
          </div>
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
