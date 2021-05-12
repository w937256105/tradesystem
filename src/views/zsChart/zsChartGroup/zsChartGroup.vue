<template>
  <div id="zs-chart-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "zsChartGroup",
  props: ['grid'],
  mounted() {
    this.setGrid()
  },
  methods: {
    setGrid() {
      let a = document.getElementById('zs-chart-group')
      console.log(this.grid);
      if(this.grid === 2){
        a.style.gridTemplateColumns = '600px 600px'
        a.style.gridTemplateRows = '500px'
      }
      if(this.grid === 4){
        a.style.gridTemplateColumns = '600px 600px'
        a.style.gridTemplateRows = '250px 250px'
      }
      if(this.grid === 6){
        a.style.gridTemplateColumns = '400px 400px 400px'
        a.style.gridTemplateRows = '250px 250px'
      }
    }
  }
}
</script>

<style scoped>
  #zs-chart-group{
    display: grid;
    width: 1200px;
    height: 500px;
  }
</style>