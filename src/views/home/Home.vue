<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <HomeSwiper :banners="banners"/>
    <RecommendView :recommends="recommends"/>
    <FeatureView/>
    <TabControl class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
    <good-list :goods="showGoods"/>
  </div>
</template>

<script>

  import RecommendView from './childComps/RecommendView'
  import NavBar from '../../components/common/navbar/NavBar'
  // 引入home.js里面的网络请求
  import {getHomeMultidata,getHomeGoods} from "../../network/home";
  import HomeSwiper from "./childComps/HomeSwiper";
  import FeatureView from  './childComps/FeatureView'
  import GoodList from '../../components/content/goods/GoodsList'

  import TabControl from "../../components/content/tabControl/TabControl";

  export default {
    name: "Home",
    components: {TabControl, FeatureView, RecommendView, HomeSwiper,NavBar,GoodList},
    //存储数据
    data(){
      return{
        // 保存首页轮播图的数据
        banners: null,
        recommends: null,
        //存储 流行、新款、精选三类的数据
        //默认0页，list存储数据
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    // 在创建的时候发送我们的网络请求
    created(){
      // 发送请求首页轮播图数据的网络请求
      // 1.请求多个数据
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommends.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }

    }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
