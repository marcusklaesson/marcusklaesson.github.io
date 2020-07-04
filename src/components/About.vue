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
                  I have a 9 year long career from Circle K Sweden, there i have worked as a salesmen, car rental
                  responsible, deputy station manager and station manager.
                </p>
                <h2 class="subtitle">Goals</h2>
                <p class="pItem1">
                  My goal when i finish my studies in june 2021 is to find a creative company that put costumers in focus to deliver
                  good and easy applications for them to use. And i think taking care of the personnel you have is a key factor to success in companies today.
                  <br />
                  <br />The dream goal is to start a company with a around 5-10 employess that build apps to private people and companies.
                </p>
              </article>

              <article class="tile is-child box">
                <h1 class="title">Jobs</h1>
                <p></p>
                <h2 class="subtitle">Circle K</h2>
                <p class="pItem1">
                  Car rental
                  responsible | sep 2017–aug 2019
                </p>Gothenburg, Sweden
                <p>Car rental responsible at Munkebäck station with a park of about 50 vehicles. The job includes servicing cars, repairing, inspecting, car planning, talking to suppliers, training staff and cleaning cars.</p>
                <br />Acting Head of Station | april 2016 - sep 2017
                <br />Bollebygd, Sweden
                <br />Acting Head of Station in Bollebygd with personnel responsibility, budget and setting goals. Ultimate responsibility for the safety and the environment at the station. Circle K's own Leadership program conducted spring-autumn 2016.
                <br />
                <br />
                <h2 class="subtitle">Statoil Fuel & Retail</h2>

                <p class="pItem1">Full time salesman | nov 2010 - april 2016</p>Gothenburg, Sweden
                <br />Permanent employment since 2010. Deputy station manager in Kungsbacka, Varberg north and Gårda. Has good experience in shop operations, car rental, car wash, office work and personnel responsibility. Independent work with great responsibility when the station manager was abcent.
                <br />
                <br />
                <h2 class="subtitle">Com Hem</h2>
                <p class="pItem1">Customer Service | aug - nov 2010</p>Barcelona, Spain
                <br />Customer service and invoicing department, sales of subscriptions and invoice questions over the telephone.
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h1 class="title">Educations</h1>
              <p></p>
              <h2 class="subtitle">App developer</h2>
              <p class="pItem1">sep 2019 - ongoing</p>IT-Högskolan Mölndal, Sweden
              <br />App development within Android & IOS. Fulltime studies, coding apps from scratch to finished product. The courses contain several programming languages, project work, project management and practice.
              <h2 class="subtitle">Electric & Dataprogram</h2>
              <p class="pItem1">aug 2007 - jun 2010</p>NTI-upper secondary school Gothenburg, Sweden
              <br />Basic courses in electrical learning and IT with specialization in network technology.
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
                    <p class="listItem2">
                      In my spare time i spend time with my girlfriend, and i train alot in the gym and in winters i play floorball in Kortedalarna division 4.
                      I also gaming and coding at home besides school.
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
</style>
