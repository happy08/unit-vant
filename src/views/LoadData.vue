<template>
    <div class="main pdb-0">
      <base-header
        title="列表"
        :left-arrow="true"
      >
      </base-header>
        
        <load-data :lists="list" :pagination="pagination" :pull-refresh="true" :get-data="getData" :set-data="setData">
          <div v-for="item in list" :key="item.id">
            <div style="height:40px; overflow:hidden">{{item.id}}</div>
          </div>
        </load-data>

    </div>  
</template>
<script>
import LoadData from "@/components/LoadData";

export default {
  name: "loaddata",
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
    LoadData
  },
  created() {
    
  },
  methods: {
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

</style>
