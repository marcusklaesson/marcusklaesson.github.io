<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-dark" style="opacity: 90%;">
      <div class="container">
        <div class="navbar-brand">
          <h1 id="titleNav" class="title" style="color:whitesmoke">Marcus Klaesson | App Developer |</h1>
          <div class="langIcons">
            <span class="navbar-item">
              <i id="one" class="fab fa-java fa-2x"></i>
            </span>
            <span class="navbar-item">
              <i class="fab fa-js-square fa-2x"></i>
            </span>
            <span class="navbar-item">
              <i class="fab fa-react fa-2x"></i>
            </span>
            <span class="navbar-item">
              <i class="fab fa-vuejs fa-2x"></i>
            </span>
            <span class="navbar-item">
              <i class="fab fa-android fa-2x"></i>
            </span>
            <span class="navbar-item">
              <i class="fab fa-apple fa-2x"></i>
            </span>
          </div>
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
      <div class="navbar-menu" id="navMenu" v-bind:class="{ 'is-active': activator }">
        <div class="navbar-end">
          <a class="navbar-item" href="#about" style="color:white">About</a>
          <a class="navbar-item" href="#portfolio" style="color:white">Portfolio</a>
          <span class="navbar-item">
            <br />
            <a href="https://github.com/marcusklaesson?tab=repositories" target="_blank">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </span>
          <span class="navbar-item">
            <a href="https://www.linkedin.com/in/marcus-klaesson-640a51b7/" target="_blank">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </span>
        </div>
      </div>
    </nav>
    <About id="about"></About>
    <br />
    <br />
    <br />
    <br />
    <Portfolio id="portfolio"></Portfolio>
    <sequential-entrance>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            Created by Marcus Klaesson | Hosted by
            <a
              href="https://github.com/"
              target="_blank"
            >Github</a> |
            <a href="mailto: marcusklaesson91@gmail.com" target="_blank">Contact</a>
          </p>
        </div>
      </footer>
    </sequential-entrance>
  </div>
</template>

<script>
import About from "./components/About";
import Portfolio from "./components/Portfolio";

export default {
  name: "App",
  components: {
    About,
    Portfolio
  },
  methods: {
    makeBurger() {
      this.activator = !this.activator;
      return this.activator;
    }
  },

  data() {
    return {
      activator: false
    };
  }
};
</script>

<style>
#app {
  background-image: url("./assets/Sky.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  font-family: "Open Sans", sans-serif;
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
.langIcons {
  display: flex;
}

.fab {
  color: white !important;
}

#about {
  bottom: 50px;
}
#portfolio {
  bottom: 50px;
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
@media (max-width: 1188px) {
  .langIcons {
    display: none;
  }
}
</style>
