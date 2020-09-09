<template lang="html">
  <b-container fluid class="main m-0 p-0">
    <b-row align-v="stretch" class="m-0">
      <b-col class="m-2 box cases bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.cases}}</h2>
        <h4 v-bind:style="{color: colors.cases}">Cases</h4>
      </b-col>
      <b-col class="m-2 box cases bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.todayCases}}</h2>
        <h4 v-bind:style="{color: colors.cases}">Cases today</h4>
      </b-col>
      <b-col class="m-2 box active bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.active}}</h2>
        <h4 v-bind:style="{color: colors.cases}">Active cases</h4>
      </b-col>
      <b-col class="m-2 box deaths bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.deaths}}</h2>
        <h4 v-bind:style="{color: colors.deaths}">Deaths</h4>
      </b-col>
      <b-col class="m-2 box deaths bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.todayDeaths}}</h2>
        <h4 v-bind:style="{color: colors.deaths}">Deaths today</h4>
      </b-col>
      <b-col class="m-2 box recovered bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.recovered}}</h2>
        <h4 v-bind:style="{color: colors.recovered}">Recovered</h4>
      </b-col>
      <b-col class="m-2 box recovered bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.todayRecovered}}</h2>
        <h4 v-bind:style="{color: colors.recovered}">Recovered today</h4>
      </b-col>
      <b-col class="m-2 box tests bg-light d-flex flex-column justify-content-center text-uppercase p-3">
        <h2>{{data.tests}}</h2>
        <h4 v-bind:style="{color: colors.tests}">Tests</h4>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "Header",
    props: ['data', 'colors'],
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
.box {
  box-shadow: 0px 0px 15px -6px rgba(0,0,0,0.5);
}
.main {
  margin: 0 !important;
}
</style>
