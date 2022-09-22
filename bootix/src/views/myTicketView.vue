<template>
  <section>
    <div class="container py-4">
      <h5 style="color: #ffffff">List My Ticket</h5>
      <div
        class="card-items d-flex row row-cols-1 row-cols-md-4 g-4 justify-content-around mt-3"
      >
        <div v-for="mybooking in myBooking" :key="mybooking.id">
          <div class="card border-0" style="width: 18rem">
            <div class="view overlay">
              <img
                class="card-img-top"
                :src="mybooking.Movie.imgUrl"
                alt="Card image cap"
              />
            </div>
            <div class="card-body" style="background-color: #182131">
              <h5 class="card-title" style="color: #ffffff">
                {{ mybooking.Movie.title }}
              </h5>
              <div
                class="d-flex justify-content-between"
                style="color: #ffffff"
              >
                <p class="card-price">
                  {{ changeFormatPrice(mybooking.Movie.price) }}
                </p>
                <p class="card-price">{{ mybooking.Movie.duration }} minutes</p>
              </div>
              <button
                @click="handleDelete(mybooking.id)"
                type="button"
                class="btn btn-danger border-0"
              >
                <i class="fa-solid fa-trash" style="color: #ffffff"></i>
              </button>
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
  name: "myTicket",
  computed: {
    ...mapState(useMovieStore, ["myBooking"]),
  },
  methods: {
    ...mapActions(useMovieStore, ["getMyBooking", "handleDelete"]),
    changeFormatPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
    },
  },
  created() {
    this.getMyBooking();
  },
};
</script>

<style></style>
