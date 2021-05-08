<template>
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"

  >
    <el-submenu index="1">
      <template slot="title">
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1" class="self-el-menu-item">选项1</el-menu-item>
        <el-menu-item index="1-2" class="self-el-menu-item">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2">
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "asideMenu",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
  .self-el-menu-item:active{
    width: 120px;
  }
</style>