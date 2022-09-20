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
            <p>Seat Info : A12</p>
            <hr class="line" />
            <p>Total Ticket : 3</p>
            <hr class="line" />
            <p>Booking Fee : $1000</p>
            <hr class="line" />
            <p>Total : $1000</p>
          </div>
          <button
            style="
              border-radius: 35px;
              width: 200px;
              height: 50px;
              color: #020916;
              background-color: #ffbb00;
              font-weight: 500;
            "
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "paymentView",
};
</script>

<style></style>
