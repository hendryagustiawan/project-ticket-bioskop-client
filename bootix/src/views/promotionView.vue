<template>
  <section>
    <div class="header">
      <!--?image -->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                  <img
                    src="../img/ikaln5.PNG"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                  <img
                    src="../img/ikaln14.PNG"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                  <img
                    src="../img/iklan3.PNG"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h5 style="color: #ffffff" class="pt-5 pb-4">Promotions</h5>
      <div
        class="card-items row row-cols-1 row-cols-md-4 g-4 justify-content-around"
      >
        <div class="col my-5" style="width: 18rem">
          <div class="card border-0">
            <div class="view overlay">
              <img
                class="card-img-top"
                src="../img/raden.PNG"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
        <div class="col my-5" style="width: 18rem">
          <div class="card border-0">
            <div class="view overlay">
              <img
                class="card-img-top"
                src="../img/iklan12.PNG"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
        <div class="col my-5" style="width: 18rem">
          <div class="card border-0">
            <div class="view overlay">
              <img
                class="card-img-top"
                src="../img/iklan11.PNG"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
        <div class="col my-5" style="width: 18rem">
          <div class="card border-0">
            <div class="view overlay">
              <img
                class="card-img-top"
                src="../img/iklan10.PNG"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "promotionView",
};
</script>

<style></style>
