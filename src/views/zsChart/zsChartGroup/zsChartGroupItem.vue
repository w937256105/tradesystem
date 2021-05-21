<template>
  <div>
    <el-select v-model="value" placeholder="选择图表" class="zs-chart-group-item-select" size="mini" @change="itemChange(value)">
      <el-option
          v-for="item in option"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <div v-if="currentType==='dayk'" class="zs-chart-group-item-chart" key="dayk">
      <g-day-k></g-day-k>
    </div>
    <div v-else-if="currentType === 'ma5'" class="zs-chart-group-item-chart" key="ma5">
      <g-day-m-a5></g-day-m-a5>
    </div>
  </div>
</template>

<script>
import GDayK from "@/views/chart/group/gDayK";
import GDayMA5 from "@/views/chart/group/gDayMA5";
export default {
  name: "zsChartGroupItem",
  components: {GDayMA5, GDayK},
  props: ['type'],
  data(){
    return{
      option:[
        {
          value: 'dayk',
          label: '日K'
        },
        {
          value: 'ma5',
          label: '5日均价'
        }
      ],
      value: '',
      currentType: this.type
    }
  },
  methods: {
    itemChange(type) {
      this.currentType = type
    }
  }
}
</script>

<style scoped>
  .zs-chart-group-item-chart{
    width: 100%;
    height: 100%;
  }
  .zs-chart-group-item-select{
    position: absolute;
    z-index: 5;
  }
</style>