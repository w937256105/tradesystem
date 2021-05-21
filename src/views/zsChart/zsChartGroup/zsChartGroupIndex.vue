<template>
  <zs-chart-group>
    <zs-chart-group-item :type="'ma5'"></zs-chart-group-item>
    <zs-chart-group-item :type="'dayk'"></zs-chart-group-item>
  </zs-chart-group>
</template>

<script>
import ZsChartGroup from "@/views/zsChart/zsChartGroup/zsChartGroup";
import ZsChartGroupItem from "@/views/zsChart/zsChartGroup/zsChartGroupItem";
export default {
  name: "zsChartGroupIndex",
  components: {ZsChartGroupItem, ZsChartGroup}
}
</script>

<style scoped>

</style>