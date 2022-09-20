<template>
  <div>
    <nav class="navbar navbar-expand-lg" style="background-color: #182131">
      <!--? left -->
      <div class="container justify-content-between">
        <div class="d-flex logo">
          <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
            <h4 style="color: #ffbb00">BooTix</h4>
          </a>
        </div>

        <!-- ? center -->

        <div class="row">
          <div class="col py-1 px-0 rounded-pill" style="background: #ffffff">
            <form class="d-flex search" role="search">
              <!-- <div class="form-group"> -->
              <input
                type="email"
                class="form-control border-0"
                placeholder="Search"
              />
              <button type="submit" class="btn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              <!-- </div> -->
            </form>
          </div>
        </div>

        <div>
          <!-- component -->
          <ul class="navbar-nav mx-2 mb-2 mb-lg-0" v-if="!access_token">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#"
                ><router-link
                  style="color: #ffffff; text-decoration: none"
                  :to="{ name: 'login' }"
                  >Sign in</router-link
                ></a
              >
            </li>
          </ul>
          <!--? Profile -->
          <div class="flex-row align-items-center" v-if="access_token">
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow text-decoration-none"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
                <span class="ms-2" style="color: #ffffff">{{ name }}</span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item">My profile</a>
                </li>
                <li>
                  <a class="dropdown-item">Settings</a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    style="cursor: pointer"
                    @click="handleLogout"
                    >Logout</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section>
      <div class="header">
        <nav class="navbar navbar-expand-lg" style="background-color: #020916">
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" style="cursor: pointer">
                    <router-link
                      class="text-decoration-none"
                      :to="{ name: 'home' }"
                      >Home</router-link
                    ></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" style="cursor: pointer"
                    ><router-link
                      class="text-decoration-none"
                      :to="{ name: 'now showing' }"
                      >Now Showing</router-link
                    ></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" style="cursor: pointer"
                    ><router-link
                      class="text-decoration-none"
                      :to="{ name: 'coming soon' }"
                      >Coming Soon</router-link
                    ></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" style="cursor: pointer"
                    ><router-link
                      class="text-decoration-none"
                      :to="{ name: 'promotions' }"
                      >Promotions</router-link
                    ></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCustomerStore } from "../stores/customers";
export default {
  name: "customerNavbarPage",
  computed: {
    ...mapState(useCustomerStore, ["access_token", ["name"]]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["handleLogout"]),
  },
};
</script>

<style></style>
