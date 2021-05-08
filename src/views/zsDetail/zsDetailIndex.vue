<template>
  <div id="zs-detail-index">
    <div class="zs-detail-index">
      <zs-detail-head></zs-detail-head>
      <zs-detail-main></zs-detail-main>
    </div>
  </div>
</template>

<script>
import ZsDetailHead from "@/views/zsDetail/zsDetailHead";
import ZsDetailMain from "@/views/zsDetail/zsDetailMain";

export default {
  name: "zsDetailIndex",
  components: {ZsDetailMain, ZsDetailHead}
}
</script>

<style scoped>
  #zs-detail-index{
    display: flex;
    justify-content: center;
  }
  .zs-detail-index{
    display: flex;
    flex-direction: column;
    width: 1200px;
  }
</style>