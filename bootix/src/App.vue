<template>
  <div>
    <custom-navbar />
    <router-view></router-view>
    <custom-footer />
  </div>
</template>

<script>
import CustomNavbar from "./components/CustomNavbar.vue";
import CustomFooter from "./components/CustomFooter.vue";
export default {
  name: "App",
  components: {
    CustomNavbar,
    CustomFooter,
  },
};
</script>

<style></style>
