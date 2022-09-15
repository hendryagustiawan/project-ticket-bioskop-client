<template>
  <div class="col mb-3" style="width: 18rem">
    <div class="card border-0">
      <div class="view overlay">
        <img
          class="card-img-top"
          :src="moviesNow.imgUrl"
          alt="Card image cap"
        />
      </div>
      <div class="card-body" style="background-color: #020916; color: #ffbb00">
        <h6 class="card-title" style="text-align: center">
          {{ moviesNow.title }}
        </h6>
        <div class="d-flex justify-content-between" style="color: #ffffff">
          <p class="card-text">{{ moviesNow.genre }}</p>
          <p class="card-text">{{ changeFormatPrice(moviesNow.price) }}</p>
        </div>
        <button
          @click="handleDetail"
          style="
            background-color: #ffbb00;
            border-radius: 35px;
            width: 100px;
            height: 50px;
            color: #020916;
            font-weight: 500;
          "
        >
          Detail
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  name: "cardNowShowing",
  props: { moviesNow: Object },
  methods: {
    changeFormatPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
    },
    handleDetail() {
      router.push({
        name: "detail",
        params: {
          id: this.moviesNow.id,
        },
      });
    },
  },
};
</script>

<style></style>
