<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-dark">
      <div class="container">
        <div class="navbar-brand">
          <h1 class="title" style="color:whitesmoke">Marcus Klaesson</h1>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="#about">About</a>
            <a class="navbar-item" href="#portfolio">Portfolio</a>
            <span class="navbar-item">
              <span class="icon">
                <br />
                <a href="https://github.com/marcusklaesson?tab=repositories" target="_blank">
                  <i class="fab fa-github fa-2x"></i>
                </a>
              </span>
            </span>
            <span class="navbar-item">
              <a href="https://www.linkedin.com/in/marcus-klaesson-640a51b7/" target="_blank">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </span>
          </div>
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
  }
};
</script>

<style>
.title {
  margin-top: 10px;
}
.fab {
  color: white !important;
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
</style>
