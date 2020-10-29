<template>
  <div class="container">
    <sequential-entrance>
      <div class="columns">
        <div class="column">
          <div>
            <vue-flip active-hover width="300px" height="600px">
              <template v-slot:front>
                <img
                  class="appIMG"
                  src="../assets/WhatAMess.jpg"
                  alt="WhatAMess"
                />
              </template>
              <template v-slot:back>
                <div class="background_projects">
                  <h1 class="title">What A Mess</h1>
                  <p>
                    Is a simple chat application that let you chat with your
                    friends any time of the day. The app has a group chat
                    included and you can style your own profile and change your
                    username. Media files can be send to your friends to share
                    experiences.
                    <br />
                    <br />Language: Java <br />Database: Firebase
                  </p>
                </div>
              </template>
            </vue-flip>
          </div>
        </div>
        <div class="column">
          <div>
            <vue-flip active-hover width="300px" height="600px">
              <template v-slot:front>
                <img
                  class="appIMG"
                  src="../assets/Foodbank.png"
                  alt="FoodBank"
                />
              </template>
              <template v-slot:back>
                <div class="background_projects">
                  <h1 class="title">Food Bank</h1>
                  <p>
                    The problem solver when you have recipes on paper that's
                    hard to find when you need them? This app got you covered,
                    FoodBank saves your favorite recipes in the app so you can
                    reach them easily while cooking.
                    <br />
                    <br />Language: Swift <br />Database: Firebase <br />API:
                    Spoonacular
                  </p>
                </div>
              </template>
            </vue-flip>
          </div>
        </div>
        <div class="column">
          <div>
            <vue-flip active-hover width="300px" height="600px">
              <template v-slot:front>
                <img
                  class="appIMG"
                  src="../assets/WeatherApp.png"
                  alt="WeatherApp"
                />
              </template>
              <template v-slot:back>
                <div class="background_projects">
                  <h1 class="title">Weather App</h1>
                  <p>
                    Is a simple wheater app when you need to find weather info
                    fast of your favorite places. Weather App lets you search
                    for weathers in the whole world and displays it with
                    relevent info.
                    <br />
                    <br />Language: Java <br />API: Openweathermap
                  </p>
                </div>
              </template>
            </vue-flip>
          </div>
        </div>
      </div>
    </sequential-entrance>
  </div>
</template>

<script>
import VueFlip from "vue-flip";
export default {
  name: "Portfolio",
  components: {
    "vue-flip": VueFlip,
  },
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
  color: black;
}
.background_projects {
  height: 600px;
  width: 300px;
  border-radius: 10px;
  background-color: snow;
  padding: 20px;
}
</style>
