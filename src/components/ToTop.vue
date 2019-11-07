<template>
  <div class="main center">

    <base-header
      title="返回顶部"
      :left-arrow="true"
    >
    </base-header>
 


    <div v-show="isShow" class="to-top">
     <van-icon name="arrow-up" @click="toTop"/>
    </div>


     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
     返回顶部<br/>
    
  </div>
</template>
<script>
import { Icon  } from "vant";
export default {
  name:"totop",
  data() {
    return {
      isShow:false
    };
  },
  components: {
    [Icon.name]:Icon 
  },
  watch: {},
  mounted() { 
    window.addEventListener('scroll', this.handleScroll, true);   
  },
  computed: {
  },
  methods: {
      toTop(){
        this.$unit.toTop()
      },
      handleScroll() {        
        //获取滚动距顶部的距离
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;      
      if (scrollTop > 100) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll); 
  }
};
</script>
<style lang="scss" scoped>
  .to-top{
    position: fixed;
    bottom: 60px;
    right: 30px;
    width: 40px;
    height: 40px;
    line-height: 35px;
    background: rgba(0,0,0,.5);
    border-radius: 50%;
    text-align: center;
  }
  .van-icon{
    font-size: 22px;
    color: #fff;
  }
</style>

