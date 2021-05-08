<template>
  <div class="top-information">
    <div class="top-information-button">
      <div class="top-information-button-left">
        <button @click="toHszsMain">网站首页</button>
        <button>加收藏</button>
      </div>
      <div class="top-information-button-right">
        <button>网站首页</button>
        <button>加收藏</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topInformation",
  methods: {
    toHszsMain() {
      this.$router.push('/hszs')
    }
  }
}
</script>

<style scoped>
  .top-information{
    display: flex;
    position: fixed;
    justify-content: center;
    top: 0px;
    height: 33px;
    width: 100%;
    background: #f7f7f7;
    z-index: 99;
  }
  .top-information-button{
    width: 1200px;
    display: flex;
    justify-content: space-between;
  }
  .top-information-button-left,.top-information-button-right{
    display: flex;
  }
  .top-information button{
    border: 0px;
    padding: 5px;
  }


</style>