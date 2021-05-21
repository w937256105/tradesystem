<template>
  <div id="zs-chart-index">
    <div class="zs-chart-main">
      <zs-detail-head></zs-detail-head>
      <zs-chart-button-group></zs-chart-button-group>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import ZsDetailHead from "@/views/zsDetail/zsDetailHead";
import ZsChartButtonGroup from "@/views/zsChart/zsChartButtonGroup";
export default {
  name: "zsChartIndex",
  components: {ZsChartButtonGroup, ZsDetailHead}
}
</script>

<style scoped>
  #zs-chart-index{
    margin-top: 31px;
  }
  .zs-chart-main{
    width: 1200px;
    margin: 0 auto;
  }
</style>