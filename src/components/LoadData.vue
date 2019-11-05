<template>
  <div class="v-load-data d-flex flex-column">
    <template v-if="pullRefresh">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" :error.sync="error" error-text="请求失败，点击重新加载" @load="onLoad(false)">
        <slot></slot>
      </van-list>
    </van-pull-refresh>
    </template>
    <template v-else>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" :error.sync="error" error-text="请求失败，点击重新加载" @load="onLoad(false)">
        <slot></slot>
      </van-list>
    </template>
  </div>
</template>
<script>
import { PullRefresh, List } from "vant";
export default {
  props: {
    lists: {
      type: [Array, Object, String, Boolean],
      default: ""
    },
    pagination: {
      type: Object
    },
    pullRefresh:{
      type: Boolean,
      default :false
    },
    getData: {
      type: Function,
      default: function() {}
    },
    setData: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      isLoading: false,
      loading: false,
      finished: false,
      error: false,
      timer: null,
      pageCur: '', //用于保存当前页的key
      pageSize: '',  //用于保存每页n条的key
      pageNum: 0 //页数
    };
  },
  components: {
    [PullRefresh.name]: PullRefresh,
    [List.name]: List
  },
  watch: {},
  created() {
    this.pageCur = Object.keys(this.pagination)[0];
    this.pageSize = Object.keys(this.pagination)[1];
  },
  computed: {},
  methods: {
    onLoad(refresh) {
      
      if (!this.timer) {
        this.timer = setTimeout(() => {
          this.getData(this.pagination).then(res => {
             //console.log('res',res);
            if (this.pagination[this.pageCur] === 1) {
              let count = res.count ? res.count : res.total;
              this.pageNum = Math.ceil(count / this.pagination[this.pageSize]); //页数
            }
            if ( res.data.length === 0 || this.pagination[this.pageCur] >= this.pageNum ) {
              //当前页>=总页数
              this.finished = true;
            }
            this.setData(res, refresh);
            this.pagination[this.pageCur]++;

            this.loading = false;
            this.isLoading = false;
          }).catch(err=>{
            //console.log('err',err);
            this.setData({data:[]} , refresh);
            this.loading = false;
            this.isLoading = false;
            this.error=true
          });

          this.timer = null;
        }, 500);
      }
    },
    onRefresh() {
      if(this.loading == true){
        this.isLoading=false
        return
      }
       this.pagination[this.pageCur] = 1;
       this.error=false;
       this.finished = false;
       this.onLoad(true);
    }
  },
  beforeDestroy: function() {
    if (this.timer) this.timer = null;
  }
};
</script>
<style lang="scss" scoped>
  .van-pull-refresh .van-list{
    min-height: calc(100vh - 96px);
  }
</style>

