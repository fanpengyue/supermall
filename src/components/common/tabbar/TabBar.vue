<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  /*水平布局,并且给一个背景颜色*/
  #tab-bar {
    display: flex;
    background: #f6f6f6;

    position: fixed;

    left: 0;
    right:0;
    bottom:0;
    box-shadow: 0 -1px 3px rgba(100,100,100,.2);
  }


</style>
