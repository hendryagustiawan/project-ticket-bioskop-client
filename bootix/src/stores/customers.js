import { defineStore } from "pinia";
import Axios from "../config/axios";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({});

export const useCustomerStore = defineStore("customers", {
  state: () => {
    return {
      email: "",
      name: localStorage.name || null,
      password: "",
      access_token: localStorage.access_token || null,
    };
  },
  actions: {
    handleCredentialResponse(response) {
      Axios.post("/customers/login-google", {
        token: response.credential,
      })
        .then(({ data }) => {
          console.log(data);
          let { access_token } = data;

          localStorage.setItem("access_token", access_token);

          this.access_token = access_token;

          this.router.push({ name: "home" });

          this.getOneCustomer();
        })
        .catch((err) => {
          toaster.error(err.response.data.message, { position: "top" });
        });
    },
    handleLogin() {
      Axios.post("/customers/login", {
        email: this.email,
        password: this.password,
      })
        .then(({ data }) => {
          this.access_token = data.access_token;
          localStorage.setItem("access_token", data.access_token);
          this.router.push("/");

          this.getOneCustomer();
        })
        .catch((err) => {
          toaster.error(err.response.data.message, { position: "top" });
        });
    },
    handleLogout() {
      this.access_token = null;
      localStorage.clear();

      this.router.push("/login");
    },
    getOneCustomer() {
      Axios.get("/customers/one-customer", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          this.name = data.username;
          localStorage.setItem("name", data.username);
        })
        .catch((err) => {
          toaster.error(err.response.data.message, { position: "top" });
        });
    },
  },
});
