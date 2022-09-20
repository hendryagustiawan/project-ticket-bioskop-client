<template>
  <section>
    <div class="background-img container-fluid py-5">
      <div class="poster card border-0" style="width: 18rem">
        <img
          class="card-img-top"
          :src="booking[0].Movie.imgUrl"
          alt="Card image cap"
        />
      </div>
    </div>
    <div class="container pt-3 pb-3">
      <div class="title pt-4 pb-3">
        <h4 style="color: #ffffff">
          {{ booking[0].Movie.title }}
        </h4>
      </div>
      <button
        style="
          border-radius: 35px;
          width: 200px;
          height: 50px;
          color: #ffbb00;
          background-color: #182131;
        "
      >
        {{ booking[0].Movie.genre }}
      </button>
      <p class="pt-4 pb-3" style="color: #ffffff">
        {{ booking[0].Movie.synopsis }}
      </p>
      <div class="items">
        <div class="list">
          <hr class="line" />
          <h5 style="color: #ffffff">Select Date</h5>
          <div class="container day row justify-content-around">
            <button @click.prevent="day = 'today'">TODAY</button>
            <button @click.prevent="day = 'friday'">FRIDAY</button>
            <button @click.prevent="day = 'saturday'">SATURDAY</button>
            <button @click.prevent="day = 'sunday'">SUNDAY</button>
            <button @click.prevent="day = 'monday'">MONDAY</button>
            <button @click.prevent="day = 'tuesday'">TUESDAY</button>
          </div>
          <hr class="line" />
          <p style="color: #ffffff">CGV Mataram</p>
          <div class="button-time">
            <button @click.prevent="time = '04:30 pm'">
              <router-link
                style="color: #27ae60; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                04:30 pm</router-link
              >
            </button>
            <button @click.prevent="time = '17:30 pm'">
              <router-link
                style="color: #27ae60; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                17:30 pm</router-link
              >
            </button>
            <button @click.prevent="time = '02:40 pm'">
              <router-link
                style="color: #27ae60; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                02:40 pm</router-link
              >
            </button>
            <button @click.prevent="time = '15:30 pm'">
              <router-link
                style="color: #27ae60; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                15:30 pm</router-link
              >
            </button>
            <button @click.prevent="time = '16:49 pm'">
              <router-link
                style="color: #27ae60; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                16:49 pm</router-link
              >
            </button>
            <hr class="line" />
            <p style="color: #ffffff">Cinema XXI Mall Mataram</p>
            <button @click.prevent="time = '09:30 pm'">
              <router-link
                style="color: #ffbb00; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                09:30 pm</router-link
              >
            </button>
            <button @click.prevent="time = '12:00 pm'">
              <router-link
                style="color: #ffbb00; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                12:00 pm</router-link
              >
            </button>
            <button @click.prevent="time = '15:30 pm'">
              <router-link
                style="color: #ffbb00; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                15:30 pm</router-link
              >
            </button>
            <button @click.prevent="time = '17:40 pm'">
              <router-link
                style="color: #ffbb00; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                17:40 pm</router-link
              >
            </button>
            <button @click.prevent="time = '20:00 pm'">
              <router-link
                style="color: #ffbb00; text-decoration: none"
                :to="{ name: 'seats' }"
              >
                20:00 pm</router-link
              >
            </button>
          </div>
          <hr class="line" />
          <div class="location">
            <h5 style="color: #ffffff">Location</h5>
            <img
              src="https://www.google.com/maps/d/thumbnail?mid=1HlgDbfqE4ikvx678XMB7XYvr_sI&hl=en"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useMovieStore } from "../stores/movies";
export default {
  name: "dateView",

  computed: {
    ...mapState(useMovieStore, ["booking"]),
    ...mapWritableState(useMovieStore, ["day", "time"]),
  },
  methods: {
    ...mapActions(useMovieStore, ["getBooking"]),
  },
  created() {
    this.getBooking();
  },
};
</script>

<style></style>
