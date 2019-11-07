<template>
  <div class="main pdb-0">
    <base-header
      title="关于"
      :left-arrow="true"
    >
      <div slot="right"> about </div> 
    </base-header>
 
       <van-tabs sticky animated swipeable>
          <van-tab  @click="onClick" v-for="index in 8" :title="'标签 ' + index" :key="index">
           
            <load-data :lists="list" :pagination="pagination" :pull-refresh="true" :get-data="getData" :set-data="setData">
              <div v-for="item in list" :key="item.id">
                <div style="height:40px; overflow:hidden">{{item.id}}</div>
              </div>
            </load-data>

          </van-tab>
        </van-tabs>       

    </div>
  
</template>

<script>
import '@/config/validate'
import { Tab, Tabs } from 'vant';
import LoadData from "@/components/LoadData";

export default {
  name: "about",
  data() {
    return {
      list: [],
      pagination: {
        page: 1, //当前页
        pageSize: 30 //每页n条
      }
    };
  },
  components: {
    LoadData,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs
  },
  created() {
  },
  methods: {
    onClick(name, title) {
      this.$toast(title);
    },

    getData(page) {
      return this.$api.list(page);
    },
    setData(res, refresh) {
      if (refresh) {  //下拉刷新
        this.list = res.data;
      } else {
        this.list.push(...res.data);
      }
    }

    
  }
};
</script>
<style lang="scss" scoped>
.about{
  background: #999
}
</style>