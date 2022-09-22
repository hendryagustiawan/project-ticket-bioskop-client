<template>
  <section>
    <div class="container d-flex pt-4 pb-5 justify-content-around">
      <div class="right">
        <div class="container profile card" style="background-color: #182131">
          <h5 class="pt-4" style="color: #ffffff">Fill Your Detail</h5>
          <br />
          <div class="col-sm mt-3">
            <div class="form-outline">
              <input
                type="text"
                id="form10Example1"
                class="form-control"
                placeholder="name"
              />
            </div>
          </div>
          <div class="row g-2 mt-4 pb-4">
            <div class="col-sm">
              <div class="form-outline">
                <input
                  type="text"
                  id="form10Example2"
                  class="form-control"
                  placeholder="phone number"
                />
              </div>
            </div>
            <div class="col-sm">
              <div class="form-outline">
                <input
                  type="text"
                  id="form10Example3"
                  class="form-control"
                  placeholder="email"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="container payment card mt-5"
          style="background-color: #182131"
        >
          <h5 class="pt-4" style="color: #ffffff">Payment</h5>
          <br />
          <div class="col-sm mt-3">
            <div class="form-outline">
              <input
                type="text"
                id="form10Example1"
                class="form-control"
                placeholder="card"
              />
            </div>
          </div>
          <div class="col-sm mt-3">
            <div class="form-outline">
              <input
                type="text"
                id="form10Example1"
                class="form-control"
                placeholder="name card"
              />
            </div>
          </div>
          <div class="row g-2 mt-4 pb-4">
            <div class="col-sm">
              <div class="form-outline">
                <input
                  type="text"
                  id="form10Example2"
                  class="form-control"
                  placeholder="expiry date"
                />
              </div>
            </div>
            <div class="col-sm">
              <div class="form-outline">
                <input
                  type="text"
                  id="form10Example3"
                  class="form-control"
                  placeholder="ccv"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left col-6">
        <div
          class="container booking-summary card mt-5 pb-3"
          style="background-color: #182131"
        >
          <h5 class="pt-4" style="color: #ffffff">Booking Summary</h5>
          <div class="list">
            <br />
            <p>Title : {{ booking.Movie.title }}</p>
            <hr class="line" />
            <p>Seat Info : {{ seats }}</p>
            <hr class="line" />
            <p>Showtime : {{ day }}, {{ time }}</p>
            <hr class="line" />
            <p>Booking Fee : {{ changeFormatPrice(booking.Movie.price) }}</p>
            <hr class="line" />
            <p>Total : {{ changeFormatPrice(booking.Movie.price) }}</p>
          </div>
          <div class="d-flex justify-content-between">
            <button
              id="pay-button"
              @click="handlePaymentButton"
              style="
                border-radius: 35px;
                width: 150px;
                height: 50px;
                color: #020916;
                background-color: #ffbb00;
                font-weight: 500;
              "
            >
              Pay
            </button>
            <button
              class="bg-danger"
              id="pay-button"
              @click="handleDelete(booking.id)"
              style="
                border-radius: 35px;
                width: 150px;
                height: 50px;
                color: #020916;
                font-weight: 500;
              "
            >
              Cancel
            </button>
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
  name: "paymentView",
  computed: {
    ...mapState(useMovieStore, [
      "booking",
      "day",
      "time",
      "seats",
      "payment_token",
    ]),
    snap() {
      return window.snap;
    },
  },
  methods: {
    ...mapActions(useMovieStore, ["handleDelete", "getTokenPayment"]),
    handlePaymentButton() {
      this.snap.pay(this.payment_token);
    },
    changeFormatPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
    },
  },
  mounted() {
    this.getTokenPayment();
  },
};
</script>

<style></style>
