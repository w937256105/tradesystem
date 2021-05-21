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
          legend: {
            data: ['MA5', 'MA10', 'MA20', 'MA30', '日K']
          },
          toolbox: {
            show: true,
            feature: {
              myTool: {
                title: '标记',
                icon: "path://M631.637333 178.432a64 64 0 0 1 19.84 13.504l167.616 167.786667a64 64 0 0 1-19.370666 103.744l-59.392 26.304-111.424 111.552-8.832 122.709333a64 64 0 0 1-109.098667 40.64l-108.202667-108.309333-184.384 185.237333-45.354666-45.162667 184.490666-185.344-111.936-112.021333a64 64 0 0 1 40.512-109.056l126.208-9.429333 109.44-109.568 25.706667-59.306667a64 64 0 0 1 84.181333-33.28z m-25.450666 58.730667l-30.549334 70.464-134.826666 135.04-149.973334 11.157333 265.408 265.6 10.538667-146.474667 136.704-136.874666 70.336-31.146667-167.637333-167.765333z",
                onclick: () => {

                }
              }
            }
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
            {
              type: 'custom',
              name: '标记',
              renderItem: '',

            }
          ]
        })
      })
    },
  }
}
</script>

<style scoped>
  #big-chart-day{
    width: 1200px;
    height: 500px;
  }
</style>