<template>
  <div>
    <top-ul></top-ul>
    <top-main></top-main>
    <quote-header></quote-header>
    <div id="zs-detail-index">
      <div class="zs-detail-index">
        <zs-detail-head></zs-detail-head>
        <zs-detail-main :test="'2000px'"></zs-detail-main>
      </div>
    </div>
  </div>
</template>

<script>
import ZsDetailHead from "@/views/zsDetail/zsDetailHead";
import ZsDetailMain from "@/views/zsDetail/zsDetailMain";
import TopUl from "@/views/hszs/top/topUl";
import TopMain from "@/components/topMain";
import QuoteHeader from "@/components/quoteHeader";

export default {
  name: "zsDetailIndex",
  components: {QuoteHeader, TopMain, TopUl, ZsDetailMain, ZsDetailHead}
}
</script>

<style scoped>
  #zs-detail-index{
  }
  .zs-detail-index{
    display: flex;
    flex-direction: column;
    width: 1200px;
    margin: 0 auto;
  }
</style>