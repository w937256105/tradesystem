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
    display: flex;
    justify-content: center;
  }
  .zs-chart-main{
    width: 1200px;
    margin-top: 31px;
  }
</style>