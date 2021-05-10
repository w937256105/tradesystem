<template>
  <day-line :ewidth="'600px'" :eheight="'400px'" :type="'week'"></day-line>
</template>

<script>
import DayLine from "@/views/chart/dayLine";
export default {
  name: "day",
  components: {DayLine},
}
</script>

<style scoped>

</style>