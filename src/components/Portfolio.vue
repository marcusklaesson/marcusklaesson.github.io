<template>
  <div class="container">
    <sequential-entrance>
      <div class="columns">
        <div class="column">
          <h1 class="title" style="color:red">Java chat application</h1>
          <div>
            <a class="chatt" href="https://github.com/marcusklaesson/WhatAMess" target="_blank">
              <img class="appIMG" src="../assets/WhatAMess.jpg" alt="WhatAMess" />
            </a>
          </div>
        </div>
        <div class="column">
          <h1 class="title" style="color:red">Swift recipe application</h1>
          <div>
            <a class="foodbank" href="https://github.com/marcusklaesson" target="_blank">
              <img class="appIMG" src="../assets/Foodbank.png" alt="FoodBank" />
            </a>
          </div>
        </div>
        <div class="column">
          <h1 class="title" style="color:red">Java weather application</h1>
          <div>
            <a class="weather" href="https://github.com/marcusklaesson/WheaterApp" target="_blank">
              <img class="appIMG" src="../assets/WeatherApp.png" alt="WeatherApp" />
            </a>
          </div>
        </div>
      </div>
    </sequential-entrance>
  </div>
</template>

<script>
export default {
  name: "Portfolio"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appIMG {
  height: 600px;
  width: 300px;
  border-radius: 10px;
}
.title {
  font-variant-caps: all-small-caps;
  font-size: 35px;
}
</style>
