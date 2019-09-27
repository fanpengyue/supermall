<template>
  <div id="app">
      <router-view/>
      <MainTabBar/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/MainTabBar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  /*导入css文件*/
@import "assets/css/base.css";
</style>
