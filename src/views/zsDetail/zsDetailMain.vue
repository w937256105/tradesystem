<template>
  <div id="zs-detail-main">
    <day-line></day-line>
  </div>
</template>

<script>
import dayLine from "@/views/chart/dayLine";
export default {
  name: "zsDetailMain",
  components: {
    dayLine
  }
}
</script>

<style scoped>
  #zs-detail-main{
    display: flex;
    justify-content: center;
  }
</style>