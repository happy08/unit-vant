<template>
  <div class="base-header">
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
    >
      <slot slot="right" name="right"></slot>
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar,Icon } from "vant";

export default {
  name:'BaseHeader',
    props: {
      title: {
        type:String,
        default:''
      },
      leftText:  {
        type:String,
        default:''
      },
      leftArrow:  {
        type:Boolean,
        default: true
      },
  },
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]:Icon
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$toast("按钮");
    }
  }
};
</script>

<style scoped lang="scss">
.base-header{
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
