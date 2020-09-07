<template>
  <l-map class="map" :center="center" :zoom="zoom">
    <l-tile-layer
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  </l-map>
</template>
<script>
  import {LMap, LTileLayer} from 'vue2-leaflet'
  export default {
    name: "Map",
    components: {
      LMap,
      LTileLayer
    }, data() {
      return {
        zoom: 4,
        center: [47.413220, -1.219482]
      }
    }
  }
</script>

<style scoped>
  .map {
    width: 50vw;
    height: 75vh;
  }
</style>
