<template>
  <div id="zs-chart-button-group">
    <button @click="toDayK">日K</button>
    <button>周K</button>
    <button>月K</button>
    <button>5分钟</button>
    <button>15分钟</button>
    <button>30分钟</button>
    <button>60分钟</button>
    <button @click="toThreeDayKline">3日振幅K线</button>
    <button @click="toGrid">图组</button>
  </div>
</template>

<script>
export default {
  name: "zsChartButtonGroup",
  methods: {
    toDayK(){
      this.$router.push({name : 'day'})
    },
    toThreeDayKline(){
      this.$router.push({name: 'threedaykline'})
    },
    toGrid(){
      this.$router.push({name: 'grid'})
    }
  }
}
</script>

<style scoped>
  #zs-chart-button-group{
    margin-top: 8px;
    background-color: #ea5404;
    padding: 6px;
  }
  #zs-chart-button-group button{
    border: #ea5404;
    background-color: #ea5404;
    color: white;
    font-size: 16px;
    margin-left: 5px;
    margin-right: 35px;
    border-radius: 3px;
    padding-left: 5px;
    padding-right: 5px;
  }
  #zs-chart-button-group button:hover{
    cursor: pointer;
  }
  #zs-chart-button-group button:focus{
    color: #ea5404;
    background-color: white;
  }
</style>