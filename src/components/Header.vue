<template lang="html">
  <b-container fluid class="main m-0 p-0">
    <b-row align-v="stretch" class="m-0">
      <b-col class="cases bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.cases}}</h2>
        <h4>Cases</h4>
      </b-col>
      <b-col class="cases bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.todayCases}}</h2>
        <h4>Cases today</h4>
      </b-col>
      <b-col class="active bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.active}}</h2>
        <h4>Active cases</h4>
      </b-col>
      <b-col class="deaths bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.deaths}}</h2>
        <h4>Deaths</h4>
      </b-col>
      <b-col class="deaths bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.todayDeaths}}</h2>
        <h4>Deaths today</h4>
      </b-col>
      <b-col class="tests bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.tests}}</h2>
        <h4>Tests</h4>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "Header",
    props: ['data'],
    data() {
      return {
        cases: ''
      }
    }, created() {
      if (this.cases) {
        this.cases = this.data.cases.toString().split("").map(i => {
          if (i.indexOf() % 3 == 0) {
            i+=",";
            console.log(i)
          }
        }).join("");
      }

    }
  }
</script>

<style lang="css">
.main {
  margin: 0 !important;
  max-height: 25vh;
}
</style>
