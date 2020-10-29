<template>
  <div id="app">
    <video autoplay muted loop id="myVideo">
      <source src="./assets/video.mp4" type="video/mp4" />
    </video>
    <div class="content">
      <nav class="navbar is-fixed-top is-dark" style="opacity: 90%">
        <div class="container">
          <div class="navbar-brand">
            <h1 id="titleNav" class="title" style="color: whitesmoke">
              Marcus Klaesson | App Developer
            </h1>
            <button
              @click="makeBurger"
              class="button navbar-burger is-dark"
              data-target="navMenu"
              v-bind:class="{ 'is-active': activator }"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div
          class="navbar-menu"
          id="navMenu"
          v-bind:class="{ 'is-active': activator }"
        >
          <div class="navbar-end">
            <a
              @click="aboutBTN"
              class="navbar-item"
              href="#about"
              v-smooth-scroll="{ duration: 1500, offset: -300 }"
              style="color: white"
              >About</a
            >
            <a
              class="navbar-item"
              href="#portfolio"
              v-smooth-scroll="{ duration: 1500, offset: -100 }"
              style="color: white"
              >Projects</a
            >
            <span class="navbar-item">
              <br />
              <a
                href="https://github.com/marcusklaesson?tab=repositories"
                target="_blank"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
            </span>
            <span class="navbar-item">
              <a
                href="https://www.linkedin.com/in/marcus-klaesson-640a51b7/"
                target="_blank"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </span>
          </div>
        </div>
      </nav>
      <div class="background_container">
        <About id="about"></About>
        <br />
        <br />
        <br />
        <br />
        <Portfolio id="portfolio"></Portfolio>
      </div>
      <sequential-entrance>
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              Created by Marcus Klaesson | Hosted by
              <a href="https://github.com/" target="_blank">Github</a> |
              <a href="mailto: marcusklaesson91@gmail.com" target="_blank"
                >Contact</a
              >
            </p>
          </div>
        </footer>
      </sequential-entrance>
    </div>
  </div>
</template>

<script>
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import VideoBg from "vue-videobg";

export default {
  name: "App",
  components: {
    About,
    Portfolio,
  },
  methods: {
    makeBurger() {
      this.activator = !this.activator;
      return this.activator;
    },
    aboutBTN() {},
  },

  data() {
    return {
      activator: false,
    };
  },
};
</script>

<style>
#app {
  /* background-image: url("./assets/orange_blue.png"); */

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

#titleNav {
  margin-top: 14px;
  margin-left: 50px;
  font-variant-caps: all-small-caps;
  font-size: 35px;
}
#navMenu {
  margin-right: 50px;
  font-variant-caps: all-small-caps;
  font-size: 23px;
}

.fab {
  color: white !important;
}
#about {
  top: 100px;
}
#portfolio {
  top: 150px;
}

.footer {
  margin-top: 250px;
}

a:hover {
  color: rgba(128, 128, 128, 0.5);
}
.chatt,
.foodbank,
.weather,
.navbar-item {
  opacity: 1;
  transition: 0.5s;
}
.chatt:hover,
.foodbank:hover,
.weather:hover,
.navbar-item:hover {
  opacity: 0.4;
  color: rgba(128, 128, 128, 0.5);
}

@media (max-width: 1024px) {
  .fab {
    color: white !important;
  }
  #navMenu {
    background-color: #363636;
  }
}
</style>
