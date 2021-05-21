<template>
  <div>
    <div id="three-day-kline"></div>
    <button @click="changeRate(0.05)">改变阈值5%</button>
    <button @click="changeRate(0.03)">改变阈值3%</button>
    <button @click="changeRate(0.1)">改变阈值10%</button>
  </div>
</template>

<script>
export default {
  name: "threeDayKline",
  data() {
    return{
      baseData: [],
      rate: 0.03,
      start_day: '2021-01-16'
    }
  },
  computed: {
    tsInformation(){
      return this.$store.state.tsInformation
    },
    end_day() {
      return this.$timeTools.getToday()
    },
    // start_d() {
    //   let temp = this.$timeTools.getPreMonth(this.end_day)
    //   temp = this.$timeTools.getPreMonth(temp)
    //   temp = this.$timeTools.getPreMonth(temp)
    //   return temp
    // }
  },
  created() {
    this.createKline()
  },
  methods: {
    createKline() {
      this.$axios({
        url: `complex/one`,
        params: {
          code: this.tsInformation.share_code,
          start_day: this.start_day,
          end_day: this.end_day
        }
      }).then(res => {
        this.baseData = this.calculateAmplitude(res.data.data)
        let chart = document.getElementById('three-day-kline')
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
                'avg_price_five', 'avg_price_ten', 'avg_price_twenty', 'avg_price_thirty','threeAmplitude'],
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
                type: 'custom',
                name: '日K',
                renderItem: this.renderItem,
                encode: {
                  x: 'datetime',
                  y: ['open', 'day_price', 'day_low', 'day_high']
                },
                large: true,
              },
            ]
          },true)
        chart.on('dataZoom',param => {
          if (param.batch[0].start === 0) {
            let end = this.baseData[0].datetime
            this.start_day = this.$timeTools.getPreMonth(end)
            end = this.$timeTools.getToday()
            this.refreshData(this.start_day,end,chart)
          }
        })
      }).catch(err => {
        console.log(err);
      })
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
        this.baseData = this.calculateAmplitude(res.data.data)
        chart.setOption({
          dataset: {
            dimensions: ['datetime', 'share_code', 'name',
              'day_low', 'day_high', 'month_low',
              'month_high', 'open', 'day_price', 'structure', 'structure_day',
              'avg_price_five', 'avg_price_ten', 'avg_price_twenty', 'avg_price_thirty','threeAmplitude'],
            source: this.baseData
          },
          series: [
            {
              type: 'custom',
              name: '日K',
              renderItem: this.renderItem,
              encode: {
                x: 'datetime',
                y: ['open', 'day_price', 'day_low', 'day_high']
              },
              large: true,
            },
          ]
        })
      })
    },
    calculateAmplitude(data){
      data[0].threeAmplitude = 0
      data[1].threeAmplitude = 0
      data[2].threeAmplitude = 0
      for (let i = 3; i < data.length; i++) {
        let max = Math.max(data[i].day_high,data[i-1].day_high,data[i-2].day_high)
        let min = Math.min(data[i].day_low,data[i-1].day_low,data[i-2].day_low)
        let close = data[i-3].day_price
        data[i].threeAmplitude = (max-min)/close
      }
      return data
    },
    renderItem(params, api) {
      let xValue = api.value(0);
      let openPoint = api.coord([xValue, api.value(7)]);
      let closePoint = api.coord([xValue, api.value(8)]);
      let lowPoint = api.coord([xValue, api.value(3)]);
      let highPoint = api.coord([xValue, api.value(4)]);
      let halfWidth = api.size([1, 0])[0] * 0.35;
      let kPoint = Math.min(openPoint[1],closePoint[1])
      let kHeight = Math.abs(openPoint[1]-closePoint[1])
      let style1 = api.style({
        stroke: '#eb5454',
        fill: '#eb5454'
      });
      let style2 = api.style({
        stroke: '#47b262',
        fill: '#47b262'
      });
      let style = api.value(15)>this.rate ? style1:style2
      return {
        type: 'group',
        children: [{
          type: 'line',
          shape: {
            x1: lowPoint[0], y1: lowPoint[1],
            x2: highPoint[0], y2: highPoint[1]
          },
          style: style
        }, {
          type: 'rect',
          shape: {
            x: openPoint[0]-halfWidth,
            y: kPoint,
            width: halfWidth+halfWidth,
            height: kHeight,
          },
          style: style
        }]
      };
    },
    changeRate(rate){
      this.rate = rate
      this.createKline()
    }

  }
}
</script>

<style scoped>
  #three-day-kline{
    width: 1200px;
    height: 500px;
  }
</style>