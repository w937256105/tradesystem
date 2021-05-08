<template>
  <div id="top-ul">
    <div class="top-ul-body">
      <el-link type="_blank">财经</el-link>
      <el-link type="_blank">焦点</el-link>
      <el-link type="_blank">股票</el-link>
      <el-link type="danger">新股</el-link>
      <el-link type="_blank">期指</el-link>
      <el-link type="_blank">期权</el-link>
      <el-link type="danger">行情</el-link>
      <el-link type="_blank">数据</el-link>
      <el-link type="_blank">全球</el-link>
      <el-link type="_blank">美股</el-link>
      <el-link type="_blank">港股</el-link>
      <el-link type="_blank">期货</el-link>
      <el-link type="_blank">外汇</el-link>
      <el-link type="_blank">银行</el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "topUl"
}
</script>

<style scoped>
  #top-ul{
    display: flex;
    justify-content: center;
    margin-top: 35px;
    width: 100%;
  }
  .top-ul-body{
    width: 1200px;
    display: flex;
    justify-content: center;
  }
  .top-ul-body a{
    flex: 1;
    font-size: 14px;
  }
</style>