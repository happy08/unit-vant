<template>
  <div id="app" class="layout">
    <transition :name="transition">
      <router-view></router-view>
      <!-- <keep-alive> <router-view v-if="$route.meta.keepAlive"></router-view>
      <router-view v-if="!$route.meta.keepAlive" :key="'time'+new Date().getTime()"></router-view> </keep-alive>-->
    </transition>

    <base-tabbar :class="{'show':tabbarShow}" />
  </div>
</template> 

<script>
import BaseTabbar from "@/components/BaseTabbar.vue";

export default {
  name: "App",
  data() {
    return {
      transition: "",
      tabbarShow: false
    };
  },
  components: {
    BaseTabbar
  },
  watch: {
    // 监听路由
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index == from.meta.index || from.meta.index == undefined) {
        this.transition = "slide-fade";
      } else if (to.meta.index > from.meta.index) {
        this.transition = "slide-left";
      } else {
        this.transition = "slide-right";
      }

      //判断是否显示tabbar
      if (
        to.path == "/" ||
        to.path == "/index" ||
        to.path == "/about" ||
        to.path == "/user"
      ) {
        this.tabbarShow = true;
      } else {
        this.tabbarShow = false;
      }
    }
  }
};
</script>

<style lang="scss" scope>
/*利用fixed回到顶部-重要*/
.slide-fade-enter-active {
  transition: transform 10ms;
  position: fixed;
  width: 100%;

  top: 0;
  opacity: 1;
}
/*页面切换效果*/
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: transform 5000ms;
  transition-timing-function: cubic-bezier(0.1, 0.2, 0.3, 1); //ease-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.slide-right-enter-active {
  position: relative;
  transform: translate3d(0, 0, 0);
  z-index: 8 !important;
}
.slide-right-enter {
  transform: translate3d(-30%, 0, 0);
}
.slide-right-leave-active {
  z-index: 9 !important;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}
.slide-right-leave-active,
.slide-left-enter-active {
  overflow-y: hidden !important;
  height: calc(100vh - 116px);
  height: calc(100vh - 96px - constant(safe-area-inset-top));
  height: calc(100vh - 96px - env(safe-area-inset-top));
}
.slide-left-leave-active {
  transform: translate3d(-30%, 0, 0);
  position: relative;
}

//子路由动画
.slide-child-enter-active,
.slide-child-leave-active {
  transition: transform 400ms;
}
.slide-child-enter,
.slide-child-leave-active {
  transform: translateX(100%);
}

/* iphonex 适配 安全区*/
// @mixin iphonex-css {
//   padding-top: constant(safe-area-inset-top); /*为导航栏+状态栏的高度 88px*/
//   padding-top: env(safe-area-inset-top); /*为导航栏+状态栏的高度 88px*/
//   padding-left: constant(safe-area-inset-left); /*如果未竖屏时为0*/
//   padding-left: env(safe-area-inset-left); /*如果未竖屏时为0*/
//   padding-right: constant(safe-area-inset-right); /*如果未竖屏时为0*/
//   padding-right: env(safe-area-inset-right); /*如果未竖屏时为0*/
//   padding-bottom: constant(safe-area-inset-bottom); /*为底下圆弧的高度 34px*/
//   padding-bottom: env(safe-area-inset-bottom); /*为底下圆弧的高度 34px*/
// }
//  @mixin iphonex-media {
//   @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
//     body.iphonex {
//       @include iphonex-css;
//     }
//   }
// }
</style>
