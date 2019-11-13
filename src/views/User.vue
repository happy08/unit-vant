<template>
  <div class="main pdt-0 pdb-50">
    <img class="user-poster" src="../assets/img/u.png" />
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />已发货
      </van-col>
    </van-row>

    <van-cell title="URL 跳转" is-link to="/user/about" />
    <van-cell title="表单验证" is-link to="/validate" />
    <van-cell title="列表上拉刷新下拉加载" is-link to="/loaddata" />
    <van-cell title="tab" is-link to="/tab" />

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group class="user-group">
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="points" title="我的积分" is-link />
    </van-cell-group>

    <van-cell-group class="user-group">
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="points" title="我的积分" is-link />
    </van-cell-group>

    <transition name="slide-child">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { MixinRefresh } from "../assets/js/mixin";
import { Row, Col, Icon, Cell, CellGroup } from "vant";
export default {
  mixins: [MixinRefresh],

  data() {
    return {
      isLoading: ""
    };
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  created() {
    //console.log("25553");
  },
  activated() {
    //console.log("23");
  }
};
</script>

<style lang="scss" scoped>
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>