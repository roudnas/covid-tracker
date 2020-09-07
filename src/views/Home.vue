<template>

  <div id="home">
    <Header v-if="this.covidData.loaded" v-bind:data="covidData.today" />
    <b-container fluid class="p-0 m-0">
      <Map/>
      <b-row class="p-0 m-0">
        <TopTen v-bind:items="items" />
        <DailyCases v-if="this.covidData.loaded" v-bind:data="this.covidData" />
      </b-row>
    </b-container>

  </div>

</template>

<script>
  import axios from 'axios'
  import Map from '../components/Map'
  import TopTen from '../components/TopTen'
  import Header from '../components/Header'
  import DailyCases from '../components/datagraphs/DailyCases'
  export default {
    name: 'Home',
    components: {
      Map,
      TopTen,
      Header,
      DailyCases
    }, props: ['query'],
    data() {
      return {
        api_url: '',
        items: {},
        covidData: {
          loaded: false,
          today: {},
          yesterday: {},
          twoDaysAgo: {}
        }, colors: {
          cases: ''
        }
      }
    },
    created() {
      this.api_url = process.env.VUE_APP_API_URL
      this.fillData()
      console.log(this.$route.query)
      console.log(this.query)
    },
    methods: {
      fillData() {
        axios
          .get(`${this.api_url}/v3/covid-19/all`)
          .then(res => (this.covidData.today = res.data))
          .catch(err => console.error(err))
        axios
          .get(`${this.api_url}/v3/covid-19/countries?sort=cases`)
          .then(res => (this.items = res.data.splice(0, 10)))
          .catch(err => console.error(err))
        axios
          .get(`${this.api_url}/v3/covid-19/all?yesterday=true`)
          .then(res => (this.covidData.yesterday = res.data))
          .catch(err => console.error(err))
        axios
          .get(`${this.api_url}/v3/covid-19/all?twoDaysAgo=true`)
          .then(res => (this.covidData.twoDaysAgo = res.data))
          .then(() => (this.covidData.loaded = true))
          .catch(err => console.error(err))
      }
    }
  }
</script>

<style scoped>
  .linechart {
    width: 45vw;
  }
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
