<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div  :style="activeStyle" :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'red'
        }
      },
      data(){
          return {
            // isActive:false
          }
      },
      computed:{
          isActive(){
            return this.$route.path.indexOf(this.path)!==-1
          },
        activeStyle(){
            return this.isActive ? {color:this.activeColor}:{}
        }
      },
      methods:{
          itemClick(){
            this.$router.replace(this.path)
          }
      }
    }
</script>

<style scoped>
  /*进行均等划分,并且中间显示,一般的tabbar的高度为49px*/
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  /*设置图片的宽度和高度*/
  .tab-bar-item img{
    margin-top: 3px;
    height: 24px;
    width: 24px;
    /*可以消除图片的下面的3个像素*/
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
