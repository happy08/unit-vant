<template>
  <div id="app" class="layout">
    <transition  :name="transition">
      <router-view />
    </transition>
    <base-tabbar v-if="tabbarShow"/> 
  </div>
</template>

<script>
import BaseTabbar from "@/components/BaseTabbar.vue"

export default {
  name: 'App',
  data(){
    return{
      transition:''
    }
  },
  components: {
    BaseTabbar
  },
  watch:{
    // 监听路由
    $route(to,from){
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index == from.meta.index) {
        this.transition = "";
      } else if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transition = "slide-left";
      } else {
        this.transition = "slide-right";
      }

      //判断是否显示tabbar
      if(to.path == '/' || to.path == '/index' || to.path == '/about' || to.path == '/user'){
        this.$store.commit('updateTabbarShow',true);
      }else{
        this.$store.commit('updateTabbarShow',false);
      }

    }
  },
  computed: {
    tabbarShow(){
      return this.$store.getters.getTabbarShow
    }
  },
}
</script>

<style lang="scss" scope>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: transform 400ms;
  position: fixed;
  top: 0;left: 0;
  z-index: -2;
  width: 100%;
  overflow: hidden;
}
.slide-right-enter {
  opacity: 1;
  transform: translate3d(-30%, 0, 0);
}
.slide-right-leave-active {
  opacity: 1;
  z-index: -1;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 1;
  transform: translate3d(-30%, 0, 0);
}

</style>
