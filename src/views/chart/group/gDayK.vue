<template>
  <div class="g-day-k"></div>
</template>

<script>
// import chartTools from "@/methods/chartTools";

export default {
  name: "gDayK",
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
    console.log('DayK Create');
    this.createGDK()
  },
  methods: {
    createGDK() {
      this.$axios({
        url: `complex/one`,
        params: {
          code: this.tsInformation.share_code,
          start_day: '2021-01-16',
          end_day: this.$timeTools.getToday()
        }
      }).then(res => {
        this.baseData = res.data.data
        let chart = this.$echarts.getInstanceByDom(document.querySelector('.g-day-k'))
        if(chart == null){
          chart = this.$echarts.init(document.querySelector('.g-day-k'))
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
          xAxis: {
            type: 'category'
          },
          yAxis: {
            type: 'value',
            scale: 'true'
          },
          series: [
            {
              type: 'k',
              name: '日K',
              encode: {
                x: 'datetime',
                y: ['open', 'day_price', 'day_low', 'day_high']
              }
            }
          ]
        },true)
        // chartTools.setZoom(chart)
      })
    }
  }
}
</script>

<style scoped>
  .g-day-k{
    width: 100%;
    height: 100%;
  }
</style>