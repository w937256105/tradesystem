<template>
  <hszs-main>
    <aside-menu></aside-menu>
    <table-zs slot="table-zs"></table-zs>
  </hszs-main>
</template>

<script>
import hszsMain from "@/views/hszs/body/hszsMain";
import tableZs from "@/views/hszs/body/tableZs";
import asideMenu from "@/views/hszs/body/asideMenu";

export default {
  name: "index",
  components: {
    hszsMain,
    tableZs,
    asideMenu
  }
}
</script>

<style scoped>

</style>