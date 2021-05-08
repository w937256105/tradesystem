<template>
  <div id="big-chart-day"></div>
</template>

<script>
export default {
  name: "day",
  data() {
    return{
      baseData: [],
      kData: []
    }
  },
  computed: {
    tsInformation() {
      return this.$store.state.tsInformation;
    }
  },
  created() {
    this.$axios({
      url: 'complex/one',
      params: {
        code: this.tsInformation.shart_code,
        start_day: '2021-03-16',
        end_day: '2021-04-16'
      }
    }).then(res => {
      this.baseData = res.data.data
      let chart = this.$echarts.init(document.getElementById('big-chart-day'))
      chart.setOption({
        title: {
          text: this.tsInformation.name
        },
        dataZoom: {
          type: 'index'
        }
      })
    })
  }
}
</script>

<style scoped>

</style>