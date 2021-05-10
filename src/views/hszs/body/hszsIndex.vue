<template>
  <div>
    <top-ul></top-ul>
    <top-main></top-main>
    <quote-header></quote-header>
    <hszs-main>
      <aside-menu></aside-menu>
      <table-zs slot="table-zs"></table-zs>
    </hszs-main>
  </div>

</template>

<script>
import hszsMain from "@/views/hszs/body/hszsMain";
import tableZs from "@/views/hszs/body/tableZs";
import asideMenu from "@/views/hszs/body/asideMenu";
import TopUl from "@/views/hszs/top/topUl";
import TopMain from "@/components/topMain";
import QuoteHeader from "@/components/quoteHeader";

export default {
  name: "index",
  components: {
    QuoteHeader,
    TopMain,
    TopUl,
    hszsMain,
    tableZs,
    asideMenu
  }
}
</script>

<style scoped>

</style>