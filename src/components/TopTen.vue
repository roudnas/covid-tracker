<template lang="html">
  <div class="component-wrapper p-3">
    <table class="table table-sm top-ten table-hover table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Country</th>
      <th scope="col">Cases</th>
      <th scope="col">Active cases</th>
      <th scope="col">Deaths</th>
      <th scope="col">Recovered</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(country, num) in items" v-bind:key="country.countryInfo._id">
      <th>{{num+1}}</th>
      <td><img class="mr-2" v-bind:src="country.countryInfo.flag" height="20">{{country.country}}</td>
      <td>{{country.cases}}</td>
      <td>{{country.active}}</td>
      <td>{{country.deaths}}</td>
      <td>{{country.recovered}}</td>

    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
  export default {
    name: "TopTen",
    components: {

    }, props: ['items']
  }
</script>

<style scoped>
.top-ten {
  overflow-y: scroll;
  height:75vh;
  width: 50vw;
}
.table {
  padding: 0;
  margin: 0;
}
</style>
