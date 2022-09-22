<template>
  <section>
    <div
      class="container-fluid d-flex justify-content-center align-items-center py-4"
      style="background-color: #020916"
    >
      <div
        class="border w-75 p-5 my-2 rounded-3 shadow border-0"
        style="background-color: #182131"
      >
        <div class="d-flex logo mb-1">
          <a class="navbar-brand me-2 d-flex align-items-center" href="#">
            <h1 style="color: #ffbb00">BooTix</h1>
          </a>
        </div>
        <h1 style="color: #ffffff" class="text-center">Thanks for Order!</h1>
        <p style="color: #ffffff" class="text-center">Please Cek My Ticket.</p>
        <button
          type="button"
          class="btn btn-primary border-0 mt-4"
          style="background-color: #ffbb00; color: #020916"
        >
          <router-link
            style="color: #020916; text-decoration: none; cursor: pointer"
            :to="{ name: 'home' }"
            >Back to Home</router-link
          >
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ticketView",
};
</script>

<style></style>
