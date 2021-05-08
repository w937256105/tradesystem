<template>
  <div id="quote-header">
    <div class="quote-header-menu">
      <el-menu default-active="1" mode="horizontal">
        <el-menu-item index="1">行情数据</el-menu-item>
        <el-menu-item index="2">证券交易</el-menu-item>
        <el-menu-item index="3">基金理财</el-menu-item>
        <el-menu-item index="4">投资组合</el-menu-item>
        <el-menu-item index="5">股吧互动</el-menu-item>
      </el-menu>
      <el-input placeholder="请输入内容" style="margin-top: 10px; width: 400px">
        <el-button slot="append" icon="el-icon-search">搜索</el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "quoteHeader"
}
</script>

<style scoped>
  #quote-header{
    display: flex;
    height: 60px;
    width: 100%;
    justify-content: center;
  }
  .quote-header-menu{
    width: 1200px;
    display: flex;
    justify-content: space-between;
  }

</style>