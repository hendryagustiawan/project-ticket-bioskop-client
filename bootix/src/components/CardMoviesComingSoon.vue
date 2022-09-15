<template>
  <div class="col mb-3" style="width: 18rem">
    <div class="card border-0">
      <div class="view overlay">
        <img class="card-img-top" :src="urlImg" alt="Card image cap" />
      </div>
      <div class="card-body" style="background-color: #020916">
        <h6 class="card-title" style="color: #ffbb00; text-align: center">
          {{ moviesComing.title }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardComingSoon",
  data() {
    return {
      urlImg:
        "https://image.tmdb.org/t/p/original" + this.moviesComing.poster_path,
    };
  },
  props: { moviesComing: Object },
};
</script>

<style></style>
