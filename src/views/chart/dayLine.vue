<template>
  <div>
    <div id="day-line"></div>
  </div>
</template>

<script>

export default {
  name: "dayLine",
  data() {
    return {
      baseData: [],
      kData: []
    }
  },
  // props:{
  //   width: 'String',
  //   height: 'String',
  //   time: 'String'
  // },
  mounted() {
    this.echartsInit()
  },
  computed: {
    tsInformation() {
      return this.$store.state.tsInformation;
    }
  },
  methods: {
    echartsInit() {
      this.$axios({
        url: 'complex/one',
        params: {
          code: this.tsInformation.share_code,
          start_day: '2021-01-16',
          end_day: '2021-04-16'
        }
      }).then(res => {
        this.baseData = res.data.data
        let dayLine = this.$echarts.init(document.getElementById('day-line'))
        dayLine.setOption({
          title: {
            text: this.tsInformation.name
          },
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            show: true,
            feature: {
              myTool: {
                show: true,
                title: '全屏查看',
                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                onclick: () => {
                  this.$router.push('zsChart')
                }
              },
              dataZoom: {
                yAxisIndex: 'none'
              }

            }
          },
          dataZoom: [
            {
              type: 'inside',
              xAxisIndex: [0, 1],
              end: 100
            },
            // {
            //   type: 'slider',
            //   start: 20,
            //   end: 100
            // }
          ],
          legend: {
            data: ['MA5', 'MA10', 'MA20', 'MA30', '日K']
          },
          dataset: {
            dimensions: ['datetime', 'share_code', 'name',
              'day_low', 'day_high', 'month_low',
              'month_high', 'open', 'day_price', 'structure', 'structure_day',
              'avg_price_five', 'avg_price_ten', 'avg_price_twenty', 'avg_price_thirty'],
            source: this.baseData
          },
          xAxis: [
            {
              type: 'category'
            },
            {
              show: 'false',
              type: 'category',
              gridIndex: 1,
              axisLabel: {show: false},
              axisTick: {show: false},
              splitLine: {show: false}
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: 'true'
            },
            {
              scale: 'true',
              gridIndex: 1,
              splitNumber: 2,
              axisLabel: {show: false},
              axisLine: {show: false},
              axisTick: {show: false},
              splitLine: {show: false}
            }
          ],
          grid: [{
            left: 40,
            right: 20,
            top: 40,
            height: 220
          }, {
            left: 40,
            right: 20,
            height: 60,
            top: 280
          }],
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
              type: 'bar',
              name: '日结构分',
              xAxisIndex: 1,
              yAxisIndex: 1,
              encode: {
                x: 'datetime',
                y: 'structure_day'
              },
              itemStyle: {
                normal: {
                  color: function (params) {
                    if (params.value.structure_day > 0)
                      return '#eb5454'
                    return '#47b262'
                  }
                }
              }
            }
          ]
        })
        dayLine.on('dataZoom', param => {
          if (param.batch[0].start === 0) {
            this.refreshData('2020-11-01','2021-04-16',dayLine)
          }
        })
      }).catch()
    },
    refreshData(start, end, chart) {
      this.$axios({
        url: 'complex/one',
        params: {
          code: this.tsInformation.share_code,
          start_day: start,
          end_day: end
        }
      }).then(res => {
        let reData = res.data.data
        chart.setOption({
          dataset: {
            dimensions: ['datetime', 'share_code', 'name',
              'day_low', 'day_high', 'month_low',
              'month_high', 'open', 'day_price', 'structure', 'structure_day',
              'avg_price_five', 'avg_price_ten', 'avg_price_twenty', 'avg_price_thirty'],
            source: reData
          },
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
              type: 'bar',
              name: '日结构分',
              xAxisIndex: 1,
              yAxisIndex: 1,
              encode: {
                x: 'datetime',
                y: 'structure_day'
              },
              itemStyle: {
                normal: {
                  color: function (params) {
                    if (params.value.structure_day > 0)
                      return '#eb5454'
                    return '#47b262'
                  }
                }
              }
            }
          ]
        })
      })
    }
  }
}

</script>

<style scoped>
#day-line {
  width: 600px;
  height: 400px;
}
</style>