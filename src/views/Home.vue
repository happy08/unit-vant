<template>
  
  <div class="main pdt-0 pdb-50">
     <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" width="100%"/>
        </van-swipe-item>
      </van-swipe>

      <van-cell title="表单验证" is-link to="/validate" />
      <van-cell title="列表上拉刷新下拉加载" is-link to="/loaddata" />
      <van-cell title="Tab" is-link to="/tab" />    
      <van-cell title="返回顶部" is-link to="/totop" />   
      <van-cell title="倒计时" is-link to="/countdown" />   
       
  </div>
      
</template>

<script>
import {Swipe, SwipeItem,Lazyload, Cell, CellGroup } from 'vant';
export default {
  name: "home",
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    };
  },
  components: {
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    [CellGroup.name]:CellGroup,
    [Cell.name]:Cell

  },
  created() {
    
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>

</style>
