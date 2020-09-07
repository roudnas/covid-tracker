<template>

  <div id="app">
    <Header v-bind:data="covidData.today" />
    <b-container fluid class="p-0 m-0">
      <b-row class="mx-0">
        <Map/>
        <TopTen v-bind:items="items" />
      </b-row>
    </b-container>

  </div>

</template>

<script>

  import axios from 'axios'
  import Map from './components/Map'
  import TopTen from './components/TopTen'
  import Header from './components/Header'

  export default {
    name: 'App',
    components: {
      Map,
      TopTen, Header
    },
    data() {
      return {
        api_url: '',
        items: {},
        covidData: {
          today: {},
          yesterday: {},
          twoDaysAgo: {}
        }
      }
    },
    created() {
      this.api_url = process.env.VUE_APP_API_URL
      axios
        .get(`${this.api_url}/v3/covid-19/all`)
        .then(res => (this.covidData.today = res.data))
        .catch(err => console.error(err))
      axios
        .get(`${this.api_url}/v3/covid-19/countries?sort=cases`)
        .then(res => (this.items = res.data.splice(0, 10)))
        .catch(err => console.error(err))
    }
  }

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  #app {
    max-height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
