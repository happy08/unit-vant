<template>

  <div class="main pdt-0 pdb-50">
      <van-cell title="URL 跳转" is-link to="/about" />
      <van-cell title="表单验证" is-link to="/validate" />
      <van-cell title="列表上拉刷新下拉加载" is-link to="/loaddata" />
      
  </div>
      
</template>

<script>
import { Cell, CellGroup } from 'vant';
export default {
  name: "home",
  data() {
    return {
      
    };
  },
  components: {
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
