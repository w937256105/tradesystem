<template>
  <div id="day-line">

  </div>
</template>

<script>

export default {
  name: "dayLine",
  data(){
    return{

    }
  },
  mounted() {
    this.$axios({
      url: 'complex/one',
      params: {
        code: '000016.SH',
        start_day: '2021-04-16',
        end_day: '2021-03-16'
      }
    }).then(res => {

    }).catch(err => {

    })
  },
  methods: {
    echartsInit() {
      this.$echarts.init(document.getElementById('day-line')).setOption({
        xAxis: {

        }
      })
    }
  }
}
</script>

<style scoped>

</style>