<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center py-5"
    style="background-color: #020916"
  >
    <div
      class="border w-75 p-5 my-2 rounded-3 shadow border-0"
      style="background-color: #182131"
    >
      <div class="row">
        <div class="col-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
        <div class="col-6 align-self-center">
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <div class="d-flex logo mb-1">
                <a class="navbar-brand me-2 d-flex align-items-center" href="#">
                  <h1 style="color: #ffbb00">BooTix</h1>
                </a>
              </div>
              <div class="header my-2">
                <h3 style="color: #ffffff">Welcome Back</h3>
                <p style="color: #ffffff">
                  Welcome back! Please enter your detail.
                </p>
              </div>
            </div>
            <div class="my-3">
              <label for="email" class="form-label" style="color: #ffffff"
                >Email address</label
              >
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                autocomplete="off"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label" style="color: #ffffff"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-floating w-100 mt-3 border-0"
              style="background-color: #ffbb00; color: #020916"
            >
              Login
            </button>
          </form>
          <div class="text-center my-3">
            <p style="color: #ffffff">
              Not a member?
              <a style="cursor: pointer; color: #ffffff">Register</a>
            </p>

            <p style="color: #ffffff">or sign up with:</p>

            <button
              id="buttonDiv"
              type="button"
              class="btn btn-primary btn-floating mx-1 border-0"
              style="background-color: #182131; color: #020916"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import { useCustomerStore } from "../stores/customers";

export default {
  name: "loginView",
  computed: {
    ...mapWritableState(useCustomerStore, ["email", "password"]),
  },
  methods: {
    ...mapActions(useCustomerStore, [
      "handleLogin",
      "handleCredentialResponse",
    ]),
  },
  mounted() {
    const cb = this.handleCredentialResponse;

    window.google.accounts.id.initialize({
      client_id:
        "354700210553-6c57r1vcpsumfrh50bqshbi75hv49ni7.apps.googleusercontent.com",
      callback: cb,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } // customization attributes
    );
    window.google.accounts.id.prompt(); // also display the One Tap dialog
  },
};
</script>

<style></style>
