<template>
  <div id="app">
    <top-information></top-information>
    <top-ul></top-ul>
    <top-main></top-main>
    <body-main><aside-menu></aside-menu></body-main>
  </div>
</template>

<script>
import topInformation from "@/components/topInformation";
import topUl from "@/views/hszs/top/topUl";
import topMain from "@/components/topMain";
import bodyMain from "@/views/hszs/body/bodyMain";
import asideMenu from "@/views/hszs/body/asideMenu";
//import elBodyMain from "@/views/body/elBodyMain";

export default {
  name: 'App',
  components: {
    topInformation,
    topUl,
    topMain,
    bodyMain,
    asideMenu
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
