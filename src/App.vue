<template>
  <div id="app">
    <top-information></top-information>
    <top-ul></top-ul>
    <top-main></top-main>
    <quote-header></quote-header>
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
import topInformation from "@/components/topInformation";
import topUl from "@/views/hszs/top/topUl";
import topMain from "@/components/topMain";
import QuoteHeader from "@/components/quoteHeader";

export default {
  name: 'App',
  created() {
    this.$router.replace('/hszs')
  },
  components: {
    QuoteHeader,
    topInformation,
    topUl,
    topMain
  },
  computed: {
    key() {
      return this.$route.path + Math.random()
    }
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
