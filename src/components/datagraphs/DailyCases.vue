<template>

  <div class="linechart pt-4">

    <h2>Last 3 days
      <hr>
    </h2>
    <LineChart class="mx-auto" v-bind:chartData="chartData.data" v-bind:options="chartData.options" />
  </div>

</template>
<script>

  import LineChart from '../graphs/LineChart'

  export default {
    name: 'DailyCases',
    components: {
      LineChart
    },
    props: ['data'],
    data() {
      return {
        chartData: {
          data: {
            labels: [],
            datasets: [
              {
                label: 'Cases',
                data: [],
                backgroundColor: ['rgba(48, 61, 116,0.2)', 'rgba(48, 61, 116,0.2)', 'rgba(48, 61, 116,0.2)'],
                borderColor: ['rgba(48, 61, 116,1)', 'rgba(48, 61, 116,1)', 'rgba (48, 61, 116,1)'],
                borderWidth: 1
              },
              {
                label: 'Deaths',
                data: [],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
              },
              {
                label: 'Recovered',
                data: [],
                backgroundColor: ['rgba(110, 155, 52,0.2)', 'rgba(110, 155, 52,0.2)', 'rgba(110, 155, 52,0.2)'],
                borderColor: ['rgba(110, 155, 52,1)', 'rgba(110, 155, 52,1)', 'rgba (110, 155, 52,1)'],
                borderWidth: 1
              }
            ]
          },
          options: {}
        }
      }
    },
    created() {
      let moment = require('moment')

      this.chartData.data.labels.push(
        moment()
          .subtract('days', 2)
          .format('MMMM Do YYYY'),
        moment()
          .subtract('days', 1)
          .format('MMMM Do YYYY'),
        moment().format('MMMM Do YYYY')
      )
      this.chartData.data.datasets[0].data.push(
        this.data.twoDaysAgo.todayCases,
        this.data.yesterday.todayCases,
        this.data.today.todayCases
      )
      this.chartData.data.datasets[1].data.push(
        this.data.twoDaysAgo.todayDeaths,
        this.data.yesterday.todayDeaths,
        this.data.today.todayDeaths
      )
      this.chartData.data.datasets[2].data.push(
        this.data.twoDaysAgo.todayRecovered,
        this.data.yesterday.todayRecovered,
        this.data.today.todayRecovered
      )
    }
  }

</script>

<style scoped>
.linechart {
  width: 35vw;
}
@media screen and (max-width:992px) {
  .linechart {
    width: 90vw;
  }
}
</style>
