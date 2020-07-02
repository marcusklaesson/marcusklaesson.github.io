<template>
  <div class="container">
    <sequential-entrance fromTop>
      <figure class="image">
        <img src="../assets/MKL.jpg" />
      </figure>
    </sequential-entrance>
    <sequential-entrance>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child box">
                <h1 class="title" style="color:red">Hi!</h1>
                <p>
                  My name is Marcus Klaesson and im 29 years old from Gothenburg, Sweden.
                  Im studying my second term as an app-developer at IT-Högskolan in Mölndal.
                  I have a 9 year long career from Circle K Sweden, there i have worked as a salesmen, deputy station manager and
                  station manager. My passion for developing applications that other people can use is my motivation.
                  I like to work solo but can also find myself good working with others in group projects.
                </p>
              </article>

              <article class="tile is-child box">
                <h1 class="title" style="color:red">Jobs</h1>
                <dd>
                  <li>
                    Circle K Sweden. Full-time salesman at Munkebäck in Gothenburg. Study leave for study.
                    Sep 2017 - Sep 2019.
                  </li>
                  <li>
                    Circle K Sweden. Acting Head of Station in Bollebygd with personnel responsibility, budget and set goals. Ultimate responsibility for the safety and the environment at the station. Circle K's own Leadership program conducted spring-autumn 2016.
                    April 2016 - Sep 2017.
                  </li>
                  <li>
                    Statoil Fuel & Retail Sweden. Extra jobs and full-time sales at Munkebäck. Permanent employment since 2010. STF service in Kungsbacka, Varberg north and Gårda. Has good experience in shop operations, car rental, car wash, office work and personnel responsibility. Independent work with great responsibility when the station manager was gone.
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
              <h1 class="title" style="color:red">Education</h1>
              <dd>
                <li>
                  App development within Android & IOS, IT-Högskolan in Mölndal. Studies of 100%. Coding apps from scratch to finished product. The courses contain several programming languages, project work, project management and practice.
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
              <h1 class="title" style="color:red">Skills</h1>
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
                <li>More to come...</li>
              </dd>
              <div class="GTK">
                <h1 class="title" style="color:red">Good to know</h1>
                <ul>
                  <h2 class="subtitle" style="color:red">Language</h2>
                  <li class="listItem1">
                    Swedish, native language.
                    <br />English good in speech and writing.
                    <br />German, good in speech and writing.
                  </li>
                  <h2 class="subtitle" style="color:red">Hobbies</h2>
                  <li
                    class="listItem2"
                  >Outside of work, I spend time with my partner, floorball and friends.</li>
                  <h2 class="subtitle" style="color:red">Driving license</h2>
                  <li class="listItem3">B-driving license, access to car.</li>
                </ul>
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
.image {
  width: 300px;
  border: solid 1px;
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
}
.GTK {
  margin-top: 200px;
}
</style>
