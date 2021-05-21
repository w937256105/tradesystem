<template>
  <el-select v-model="value" placeholder="选择图表" class="zs-chart-group-item-select" size="mini" @change="itemChange(value)">
    <el-option
        v-for="item in option"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "zsChartGroupSelect",
}
</script>

<style scoped>

</style>