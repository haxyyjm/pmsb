<template>
  <div class="main-app">
    <transition name="fade" enter-active-class="animated fadeIn" mode="out-in">
      <keep-alive>
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app-main',
    data() {
      return {
        desc: '这里是(左侧)主界面'
      }
    },
    computed: {
      key() {
        return this.$route.path
      }
    }
  }
</script>

<style scoped lang="less">
  .main-app {
    padding: 5px
  }
</style>
