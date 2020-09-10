<template lang="html">
  <div class="component-wrapper pt-3 pl-5 text-center">
    <b-spinner v-if="!this.loaded" label="Spinning"></b-spinner>
    <table v-if="this.loaded" class="table top-ten table-hover table-striped table-responsive">
  <thead class="thead-dark thead-sticky">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Country</th>
      <th scope="col">Cases</th>
      <th scope="col">Active</th>
      <th scope="col">Deaths</th>
      <th scope="col">Recovered</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(country, num) in items" v-bind:key="country.countryInfo._id">
      <th>{{num+1}}</th>
      <td class="d-flex justify-content-center"><img class="mr-3" v-bind:src="country.countryInfo.flag" height="20">{{country.country}}</td>
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

    }, props: ['items', 'loaded']
  }
</script>

<style scoped>
.top-ten {
  height:80vh;
}
.component-wrapper {
  width: 50vw;
}
.table {
  padding: 0;
  margin: 0;
}
.thead {
  position: sticky;
}
.tbody {
  overflow-y: scroll;
}
@media screen and (max-width:992px) {
  .component-wrapper {
    width: 90vw;
  }
}
</style>
