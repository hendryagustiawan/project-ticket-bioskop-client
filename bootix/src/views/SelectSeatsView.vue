<template>
  <section>
    <div class="container">
      <h5 style="color: #ffffff" class="pt-5 pb-4">Seat Selected</h5>
      <div class="container row justify-content-center">
        <div class="col-4">
          <div class="row pb-5">
            <div class="row justify-content-center">
              <div
                @click.prevent="seats = 'A1'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >A1</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'A2'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >A2</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'A3'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >A3</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'A4'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >A4</router-link
                >
              </div>
            </div>
            <div class="row justify-content-center">
              <div
                @click.prevent="seats = 'B1'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >B1</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'B2'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >B2</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'B3'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >B3</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'B4'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >B4</router-link
                >
              </div>
            </div>
            <div class="row justify-content-center">
              <div
                @click.prevent="seats = 'C1'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >C1</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'C2'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >C2</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'C3'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >C3</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'C4'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >C4</router-link
                >
              </div>
            </div>
          </div>
          <div class="row pb-5">
            <div class="row justify-content-center">
              <div
                @click.prevent="seats = 'A1'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >A1</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'A2'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >A2</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'A3'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >A3</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'A4'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >A4</router-link
                >
              </div>
            </div>
            <div class="row justify-content-center">
              <div
                @click.prevent="seats = 'B1'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >B1</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'B2'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >B2</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'B3'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >B3</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'B4'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >B4</router-link
                >
              </div>
            </div>
            <div class="row justify-content-center">
              <div
                @click.prevent="seats = 'C1'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >C1</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'C2'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >C2</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'C3'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >C3</router-link
                >
              </div>
              <div
                @click.prevent="seats = 'C4'"
                class="col seat d-flex justify-content-center align-items-center rounded"
              >
                <router-link
                  style="color: #020916; text-decoration: none"
                  :to="{ name: 'payment' }"
                  >C4</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapWritableState } from "pinia";
import { useMovieStore } from "../stores/movies";
export default {
  name: "seatView",
  computed: {
    ...mapWritableState(useMovieStore, ["seats"]),
  },
};
</script>

<style></style>
