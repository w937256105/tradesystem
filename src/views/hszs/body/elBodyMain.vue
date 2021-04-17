<template>
  <div id="el-body-main">
    <el-container class="el-body-main">
      <el-aside width="180px" class="el-body-main-aside">
        <button>
          123
        </button>
      </el-aside>
      <el-main class="el-body-main-main"></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "elBodyMain"
}
</script>

<style scoped>
  #el-body-main{
    display: flex;
    justify-content: center;
  }
  .el-body-main{
    width: 1200px;
  }
  .el-body-main-aside{
    background: blanchedalmond;
  }
  .el-body-main-main{
    background: beige;
    height: 2000px;
  }
</style>