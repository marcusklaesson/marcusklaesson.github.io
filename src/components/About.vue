<template>
  <div class="container">
    <div class="animate__animated animate__fadeIn animate__delay-1s">
      <figure class="image">
        <img class="imageTop" src="../assets/MKL.png" />
      </figure>
    </div>

    <sequential-entrance>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child box">
                <h1 class="title">Hi!</h1>
                <p>
                  My name is Marcus Klaesson and im 29 years old from Gothenburg, Sweden.
                  Im studying my second term as an app developer at IT-Högskolan in Mölndal.
                  I have a 9 year long career from Circle K Sweden, there i have worked as a salesmen, deputy station manager and
                  station manager. My passion for developing applications that other people can use is my motivation.
                </p>
              </article>

              <article class="tile is-child box">
                <h1 class="title">Jobs</h1>
                <dd>
                  <li>
                    Circle K Sweden. Full-time salesman at Munkebäck in Gothenburg. Study leave.
                    Sep 2017 - Sep 2019.
                  </li>
                  <li>
                    Circle K Sweden. Acting Head of Station in Bollebygd with personnel responsibility, budget and setting goals. Ultimate responsibility for the safety and the environment at the station. Circle K's own Leadership program conducted spring-autumn 2016.
                    April 2016 - Sep 2017.
                  </li>
                  <li>
                    Statoil Fuel & Retail Sweden. Extra jobs and full-time sales at Munkebäck. Permanent employment since 2010. STF service in Kungsbacka, Varberg north and Gårda. Has good experience in shop operations, car rental, car wash, office work and personnel responsibility. Independent work with great responsibility when the station manager was abcent.
                    Nov 2010 - April 2016.
                  </li>
                  <li>
                    Com Hem, Barcelona.
                    Customer service and invoicing department, sales of subscriptions and invoice questions over the telephone.
                    Aug - Nov 2010.
                  </li>
                </dd>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h1 class="title">Education</h1>
              <dd>
                <li>
                  App development within Android & IOS, IT-Högskolan in Mölndal. Fulltime studies, coding apps from scratch to finished product. The courses contain several programming languages, project work, project management and practice.
                  Sep 2019 - ongoing.
                </li>
                <li>
                  El & Dataprogramet with network orientation, NTI-upper secondary school Gothenburg. Basic courses in electrical learning and IT with specialization in network technology.
                  Aug 2007 - Jun 2010.
                </li>
              </dd>
            </article>
          </div>
        </div>
        <div class="skillBox">
          <div class="tile is-parent">
            <article class="tile is-child box">
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
                <li>More to come...</li>
              </dd>
              <div class="GTK">
                <div class="GTKTEXT">
                  <h1 class="title">Good to know</h1>
                  <ul>
                    <h2 class="subtitle">Language</h2>
                    <li class="listItem1">
                      Swedish, native language.
                      <br />English fluent in speaking and writing.
                      <br />German, good in speaking and writing.
                    </li>
                    <h2 class="subtitle">Hobbies</h2>
                    <li class="listItem2">I spend time with my partner, floorball and friends.</li>
                    <h2 class="subtitle">Driving license</h2>
                    <li class="listItem3">B-driving license, access to car.</li>
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
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageTop {
  width: 600px;
  margin-bottom: -183px;
}
.animate__animated.animate__fadeIn {
  --animate-duration: 1s;
}

.tile {
  margin-top: 20px;
}
.skillBox {
  margin-top: 40px;
  width: 400px;
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
}
.title {
  font-variant-caps: all-small-caps;
  font-size: 35px;
  color: black;
}
.GTK {
  margin-top: 200px;
}
</style>
