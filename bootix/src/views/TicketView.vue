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
        <div class="row">
          <div class="col-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
              class="img-thumbnail"
              width="70%"
              alt="Sample image"
            />
          </div>
          <div class="col-6">
            <form>
              <div class="mb-3">
                <div class="header my-2">
                  <h1 style="color: #ffffff">Thanks for Order!</h1>
                </div>
              </div>
              <div class="my-3">
                <label for="email" class="form-label" style="color: #ffbb00"
                  >Seats : A10</label
                >
              </div>
              <div class="mb-3">
                <label for="password" class="form-label" style="color: #ffbb00"
                  >Date : June 18</label
                >
              </div>
              <div class="mb-3">
                <label for="password" class="form-label" style="color: #ffbb00"
                  >Showtime : 04:12 pm</label
                >
              </div>
              <div class="mb-3">
                <label for="password" class="form-label" style="color: #ffbb00"
                  >Total Paid : $1000</label
                >
              </div>
            </form>
          </div>
          <button
            type="button"
            class="btn btn-primary border-0 mt-4"
            style="background-color: #ffbb00; color: #020916"
          >
            Back to Home
          </button>
        </div>
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
