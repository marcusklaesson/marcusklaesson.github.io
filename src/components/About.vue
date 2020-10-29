<template>
  <div class="container">
    <sequential-entrance>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child box" style="background-color: snow">
                <h1 class="title">Hi</h1>
                <p>
                  My name is Marcus Klaesson. I'm 29 years old and live in
                  Gothenburg, Sweden. I'm studying my second term as an app
                  developer at IT-Högskolan in Mölndal, Gothenburg. Before I
                  started my studies I worked 9 years at the petrol company
                  Circle K Sweden, where I hold various positions: as salesmen,
                  car rental responsible, deputy station manager and finally as
                  station manager.
                </p>
                <h2 class="subtitle">Goals</h2>
                <p class="pItem1">
                  When I finalize my studies in June 2021 I am aiming for to
                  find company with focus on its customers’ needs. A company
                  that is striving for to provide innovative and user friendly
                  applications. Furthermore, a company taking care of its
                  personnel, as committed employees are one of the key success
                  factors today.
                  <br />
                  <br />My dream is to start a company with around 5-10
                  employees that build apps for private use and companies.
                </p>
              </article>

              <article class="tile is-child box" style="background-color: snow">
                <h1 class="title">Jobs</h1>
                <p></p>
                <h2 class="subtitle">Circle K</h2>
                <p class="pItem1">
                  Car rental responsible | September 2017 – August 2019
                </p>
                Gothenburg, Sweden
                <p>
                  Responsible for car rental at Munkebäck station with a park of
                  about 50 vehicles. The job included service of cars,
                  repairing, inspections, car planning, talking to suppliers,
                  training staff and cleaning cars.
                </p>
                <br />Head of Station | April 2016 - September 2017
                <br />Bollebygd, Sweden <br />Station Manager in Bollebygd with
                responsibility for staff, budget and target setting. Ultimate
                responsibility for safety and environment at the station.
                Participated in Circle K's own Leadership Program in 2016.
                <br />
                <br />
                <h2 class="subtitle">Statoil Fuel & Retail</h2>

                <p class="pItem1">
                  Full time salesman | November 2010 - April 2016
                </p>
                Gothenburg, Sweden <br />Permanent employment since 2010. Deputy
                station manager in Kungsbacka, Varberg North and Gårda. Good
                experience in shop operations, car rental, car wash, office work
                and personnel responsibility. Independent work with full
                responsibility when the ordinary station manager was absent.
                <br />
                <br />
                <h2 class="subtitle">Com Hem</h2>
                <p class="pItem1">Customer Service | August - November 2010</p>
                Barcelona, Spain <br />Customer service and invoicing
                department, sales of subscriptions and invoice support over the
                phone.
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box" style="background-color: snow">
              <h1 class="title">Educations</h1>
              <p></p>
              <h2 class="subtitle">App developer</h2>
              <p class="pItem1">September 2019 - ongoing</p>
              IT-Högskolan Mölndal, Sweden <br />App development within Android
              & IOS. Full time studies, coding apps from scratch to final
              product. The courses contain several programming languages,
              project work, project management and practice.
              <h2 class="subtitle">Electric & Dataprogram</h2>
              <p class="pItem1">August 2007 - June 2010</p>
              NTI senior high school Gothenburg, Sweden <br />Basic courses in
              electricity and IT with specialization in network technology.
            </article>
          </div>
        </div>
        <div class="animate__animated animate__fadeIn animate__delay-1s">
          <img class="imageTop" src="../assets/me_new.png" />
        </div>
        <div class="skillBox">
          <div class="tile is-parent">
            <article class="tile is-child box" style="background-color: snow">
              <h1 class="title">Skills</h1>
              <dd>
                <li>Swift</li>
                <li>Objective-C</li>
                <li>Java</li>
                <li>C#</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Vue-Cli</li>
                <li>SQL</li>
                <li>Express</li>
                <li>Firebase</li>
                <li>React Native</li>
                <li>Expo</li>
                <li>More to come...</li>
              </dd>
              <div class="GTK">
                <div class="GTKTEXT">
                  <h1 class="title">Good to know</h1>
                  <ul>
                    <h2 class="subtitle">Language</h2>
                    <p class="listItem1">
                      Swedish, native language.
                      <br />English, fluent in speaking and writing.
                      <br />German, good in speaking and writing.
                    </p>
                    <h2 class="subtitle">Hobbies</h2>
                    <p class="listItem2">
                      In my spare time i spend time with my girlfriend, work out
                      in the gym and during the winter season I play floorball
                      in Division 4. I also enjoy gaming and coding at home in
                      addition to school.
                    </p>
                    <h2 class="subtitle">Driving license</h2>
                    <p class="listItem3">B-driving license, access to car.</p>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </sequential-entrance>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.animate__animated.animate__fadeIn {
  --animate-duration: 1s;
}

.skillBox {
  margin-top: 576px;
  width: 330px;
}
.listItem1 {
  margin-top: -20px;
}
.listItem2 {
  margin-top: -20px;
}
.listItem3 {
  margin-top: -20px;
}
.subtitle {
  margin-top: 10px;
  font-variant-caps: all-small-caps;
  font-size: 25px;
  color: black;
  font-weight: bold;
}
.title {
  font-variant-caps: all-small-caps;
  font-size: 35px;
  color: black;
}
.GTK {
  margin-top: 50px;
}
.pItem1 {
  margin-top: -20px;
}
.imageTop {
  width: 200px;
  padding-top: 50px;
  right: 160px;
  position: fixed;
}
.animate__animated.animate__fadeIn {
  --animate-duration: 1s;
}
</style>
