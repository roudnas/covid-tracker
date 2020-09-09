<template>

  <l-map class="map" :center="center" v-bind:zoom="zoom" :minZoom="2.5">
    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <l-circle @click="centerMap([circle.countryInfo.lat, circle.countryInfo.long])"
              v-for="circle in countryData"
              v-bind:key="circle.countryInfo._id"
              :lat-lng="[circle.countryInfo.lat, circle.countryInfo.long]"
              :radius="circle.cases / 5">
      <l-tooltip><img v-bind:src="circle.countryInfo.flag" height="20"> <h4 class="p-0 m-0">{{circle.country}}</h4>
        <h6 class="m-0 p-0">Cases: {{circle.cases}}</h6>
        <h6 class="m-0 p-0">Deaths: {{circle.deaths}}</h6>
        <h6 class="m-0 p-0">Recovered: {{circle.recovered}}</h6>
        <h6 class="m-0 p-0">Cases today: {{circle.todayCases}}</h6>
        <h6 class="m-0 p-0">Deaths today: {{circle.todayDeaths}}</h6>
        <h6 class="m-0 p-0">Recovered today: {{circle.todayRecovered}}</h6>
        <h6 class="m-0 p-0">Tests: {{circle.tests}}</h6>
        <h6 class="m-0 p-0">Active: {{circle.active}}</h6>
      </l-tooltip>
    </l-circle>
  </l-map>

</template>
<script>

  import { LMap, LTileLayer, LCircle, LTooltip } from 'vue2-leaflet'
  export default {
    name: 'Map',
    props: ['countryData'],
    components: {
      LMap,
      LTileLayer,
      LCircle,
      LTooltip
    },
    data() {
      return {
        zoom: 2.5,
        center: [16, -24]
      }
    },
    methods: {
      centerMap(longLat) {
        this.center = longLat
      }
    }
  }

</script>

<style scoped>

  .map {
    height: 75vh;
  }

</style>
