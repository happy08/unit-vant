<template>
  <div class="base-header">
    <van-nav-bar
      :title="title"
      :border="false"
      :style="{background:background}"
      :left-text="leftText"
      :left-arrow="leftArrow"
      :left-link="leftLink"
      @click-left="onClickLeft"
    >
      <slot slot="right" name="right"></slot>
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar, Icon } from "vant";

export default {
  name: "BaseHeader",
  props: {
    title: {
      type: String,
      default: ""
    },
    leftText: {
      type: String,
      default: ""
    },
    leftLink: {
      type: String,
      default: ""
    },
    leftArrow: {
      type: Boolean,
      default: true
    },
    background: {
      type: String,
      default: ""
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  created() {
    //PC版
    if (this.$unit.device() == "PC") {
    }
  },
  methods: {
    onClickLeft() {
      if (this.leftLink != "") {
        this.$router.push(this.leftLink);
      } else {
        this.$router.go(-1);
      }
    },
    onClickRight() {
      this.$toast("按钮");
    }
  }
};
</script>

<style scoped lang="scss">
.base-header {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
}
.van-nav-bar {
  background: #f60;
  /* Status bar height on iOS 10 */
  padding-top: 20px;
  /* Status bar height on iOS 11.0 */
  padding-top: constant(safe-area-inset-top);
  /* Status bar height on iOS 11+ */
  padding-top: env(safe-area-inset-top);

  background: url("../assets/img/bg.png");
  background-position: bottom center;
  background-size: cover;
}

.van-nav-bar__title,
.van-nav-bar .van-icon,
.van-nav-bar__right {
  color: #fff;
}
</style>
