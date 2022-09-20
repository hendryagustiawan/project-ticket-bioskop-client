import { defineStore } from "pinia";
import Axios from "../config/axios";

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
          console.log(err);
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
          console.log(err);
        });
    },
  },
});
