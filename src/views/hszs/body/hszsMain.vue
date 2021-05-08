<template>
  <div id="body-main">
    <div class="body-main">
      <div class="body-main-left">
        <slot></slot>
      </div>
      <div class="body-main-left" v-if="isLeftShow">
      </div>
      <div class="body-main-right">
        <slot name="table-zs"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bodyMain",
  data(){
    return{
      isLeftShow: false
    }
  },
  mounted() {
    let __this = this
    window.onscroll = function (){
      scrollFunction()
    }
    function scrollFunction(){
      let pxTop = document.getElementsByClassName('body-main-left')
      let pos = document.getElementsByClassName('body-main-right')[0].getBoundingClientRect().top
      if (pos <= 40){
        pxTop[0].style.position = 'fixed'
        pxTop[0].style.top = '40px'
        __this.isLeftShow = true
      }else {
        pxTop[0].style.position = 'relative'
        pxTop[0].style.top = '0px'
        __this.isLeftShow = false
      }
    }
  },
  methods: {
    // getTop(elem){
    //   let offset = elem.offsetTop
    //   if (elem.offsetParent != null){
    //     offset += this.getTop(elem.offsetParent)
    //   }
    //   return offset
    // }
  }
}

</script>

<style scoped>
  #body-main{
    display: flex;
    justify-content: center;
  }
  .body-main{
    width: 1200px;
    display: flex;
  }
  .body-main-left{
    display: flex;
    flex-direction: column;

    height: 70vh;
    width: 180px;

  }
  .body-main-right{
    display: flex;
    height: 2000px;
    width: 1020px;
  }
</style>