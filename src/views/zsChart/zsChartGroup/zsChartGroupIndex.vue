<template>
  <zs-chart-group :grid="grid">
    <div v-if="grid>=2">1</div>
    <div v-if="grid>=2">2</div>
    <div v-if="grid>=4">3</div>
    <div v-if="grid>=4">4</div>
    <div v-if="grid>=6">5</div>
    <div v-if="grid>=6">6</div>
  </zs-chart-group>
</template>

<script>
import ZsChartGroup from "@/views/zsChart/zsChartGroup/zsChartGroup";
export default {
  name: "zsChartGroupIndex",
  components: {ZsChartGroup},
  data(){
    return{
      grid: 4
    }
  }
}
</script>

<style scoped>

</style>