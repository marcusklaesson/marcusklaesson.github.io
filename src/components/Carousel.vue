<template>
  <div class="container">
    <sequential-entrance fromTop>
      <div class="carousel">
        <b-carousel animated="fade" indicator-style="is-boxes">
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section class="hero is-small">
              <div class="hero-body has-text-centered">
                <img class="carouselImg" :src="carousel.image" />
              </div>
            </section>
          </b-carousel-item>
        </b-carousel>
      </div>
    </sequential-entrance>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      carousels: [
        { image: require("../assets/Foodbank.png") },
        { image: require("../assets/WeatherApp.png") },
        { image: require("../assets/WhatAMess.jpg") }
      ]
    };
  }
};
</script>

<style scoped>
.carousel {
  left: 210px;
  top: 60px;
}

.carouselImg {
  height: 400px;
  width: 200px;
}
</style>