<template>
  <div class="app-wrapper">
    <navbar></navbar>
    <!-- <sidebar></sidebar> -->
    <div class="main-container">
      <app-main></app-main>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Navbar from './navbar'
//   import Sidebar from './sidebar/sidebar'
  import  Footer from './footer'
  import AppMain from './app-main'
  export default {
    components: {
      Navbar,
    //   Sidebar,
      AppMain,
      Footer
    }
  }
</script>
<style scoped lang="less">
.app-wrapper {
  height: 100%;
  position: absolute;
  width: 100%; /* 主容器 */
  min-width: 960px;
  .main-container {
    // padding-left: 201px;
    height: calc(100% - 34px);
    padding-top: 2px;
  }
}
</style>
