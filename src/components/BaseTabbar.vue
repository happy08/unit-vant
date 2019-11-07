<template>
  <div class="base-tabbar">
    <van-tabbar  route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="search">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: 'BaseTabbar',
  data() {
    return {
      //active: 0
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]:TabbarItem
  }

}
</script>

<style scoped lang="scss">
.base-tabbar{
  position: fixed;;
  bottom: 0;   
  width: 100%;
  height: 50px;
}

</style>
