<template>
  <div id="big-chart-day"></div>
</template>

<script>
export default {
  name: "day",
  computed: {
    tsInformation(){
      return this.$store.state.tsInformation
    }
  },
  created() {
    this.createChart()
  },
  methods: {
    createChart() {
      this.$axios({
        url: `complex/one`,
        params: {
          code: this.tsInformation.share_code,
          start_day: '2021-01-16',
          end_day: '2021-04-16'
        }
      }).then(res => {
        let chart = document.getElementById('big-chart-day')
        chart = this.$echarts.init(chart)
        chart.setOption({
          title: {
            text: this.tsInformation.name
          },
          tooltip: {
            trigger: 'axis'
          },
          dataZoom: [
            {
              type: 'inside',
              end: 100
            },
          ],
          dataset: {
            dimensions: ['datetime', 'share_code', 'name',
              'day_low', 'day_high', 'month_low',
              'month_high', 'open', 'day_price', 'structure', 'structure_day',
              'avg_price_five', 'avg_price_ten', 'avg_price_twenty', 'avg_price_thirty'],
            source: res.data.data
          },
          xAxis: [
            {
              type: 'category'
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: 'true'
            },
          ],
          series: [
            {
              type: 'line',
              name: 'MA5',
              symbol: 'none',
              encode: {
                x: 'datetime',
                y: 'avg_price_five'
              }
            },
            {
              type: 'line',
              name: 'MA10',
              symbol: 'none',
              encode: {
                x: 'datetime',
                y: 'avg_price_ten'
              }
            },
            {
              type: 'line',
              name: 'MA20',
              symbol: 'none',
              encode: {
                x: 'datetime',
                y: 'avg_price_twenty'
              }
            },
            {
              type: 'line',
              name: 'MA30',
              symbol: 'none',
              encode: {
                x: 'datetime',
                y: 'avg_price_thirty'
              }
            },
            {
              type: 'k',
              name: '日K',
              encode: {
                x: 'datetime',
                y: ['open', 'day_price', 'day_low', 'day_high']
              }
            },
          ]
        })
      })
    },
    getToday() {
      let day = new Date()
      let month = day.getMonth()
      if (month < 10){
        month = '0'+(month+1)
      }
      let today = day.getDate()
      if (today < 10){
        today = '0' + today
      }
      return day.getFullYear()+'-'+month+'-'+today
    },
    getPreDay(date){
      let year = date.slice(0,4)
      let month = date.slice(5,7)
      let day = date.slice(8,10)
      let daysInMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31]
      if (year%4 === 0){
        daysInMonth[2] = 29
      }
      if (month-1 === 0){
        month = 12
        year--
      }else {
        month--
      }
      day = Math.min(day,daysInMonth[month])
      if(month < 10){
        month = '0' + month
      }
      if (day < 10){
        day = '0' + day
      }
      return year+'-'+month+'-'+day
    },
    getYesterday(date){
      let daysInMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31]
      let year = date.slice(0,4)
      let month = date.slice(5,7)
      let day = date.slice(8,10)
      if(day-1 === 0){
        if(month-1 === 0){
          year--
          month = 12
          day = 31
        }else {
          month--
          day = daysInMonth[month]
        }
      }else {
        day--
      }
      if(month < 10){
        month = '0' + month
      }
      if (day < 10){
        day = '0' + day
      }
      return year+'-'+month+'-'+day
    }
  }
}
</script>

<style scoped>
  #big-chart-day{
    width: 1200px;
    height: 500px;
  }
</style>