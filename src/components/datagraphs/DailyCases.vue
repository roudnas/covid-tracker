<template>

  <LineChart class="linechart"
             v-bind:chartData="chartData.data"
             v-bind:options="chartData.options" />

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
                label: 'Daily cases - last 3 days',
                data: [],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
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
    }
  }

</script>

<style lang="css">
</style>
