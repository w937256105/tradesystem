<template>
  <div class="g-day-ma5"></div>
</template>

<script>


export default {
  name: "gDayMA5",
  computed: {
    tsInformation() {
      return this.$store.state.tsInformation
    }
  },
  data() {
    return {
      baseData: []
    }
  },
  created() {
    this.createGMA5()
  },
  methods: {
    createGMA5() {
      this.$axios({
        url: `complex/one`,
        params: {
          code: this.tsInformation.share_code,
          start_day: '2021-01-16',
          end_day: this.$timeTools.getToday()
        }
      }).then(res => {
        this.baseData = res.data.data
        let chart = this.$echarts.getInstanceByDom(document.querySelector('.g-day-ma5'))
        if(chart == null){
          chart = this.$echarts.init(document.querySelector('.g-day-ma5'))
        }
        chart.setOption({
          dataset: {
            dimensions: ['datetime', 'share_code', 'name',
              'day_low', 'day_high', 'month_low',
              'month_high', 'open', 'day_price', 'structure', 'structure_day',
              'avg_price_five', 'avg_price_ten', 'avg_price_twenty', 'avg_price_thirty'],
            source: this.baseData
          },
          tooltip: {
            trigger: 'axis'
          },
          title: {
            text: 'MA5'
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {
            type: 'value',
            scale: 'true'
          },
          series: [
            {
              type: 'line',
              name: 'MA5',
              encode: {
                x: 'datetime',
                y: 'avg_price_ten'
              }
            }
          ]
        }, true)
      })
    }
  }
}
</script>

<style scoped>
  .g-day-ma5{
    width: 100%;
    height: 100%;
  }
</style>