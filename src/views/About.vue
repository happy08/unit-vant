<template>
  <div class="main pdb-50">
    <base-header
      title="关于"
      :left-arrow="true"
    >
      <div slot="right"> <van-icon name="close" /> </div> 
    </base-header>
 
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">


        <van-cell-group>
          <van-field
            v-model="username"
            required
            v-validate="'required|length:6,12'"
            data-vv-name="用户名" 
            label="用户名"
            placeholder="请输入用户名"
          />
          <van-field
            v-model="phone"
            v-validate="'mobile'"
            data-vv-name="手机号" 
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          
        </van-cell-group>

       <div class="pd-15">
        <van-button @click="onSubmit" type="primary" size="normal" block round>普通按钮</van-button>
      </div>

 
  </van-pull-refresh>

</div>
  
</template>

<script>
import '@/config/validate'
import { Field,cellGroup,Button,Icon,PullRefresh   } from 'vant';

export default {
  name: "about",
  data() {
    return {
       username:'',
       phone:'',

      count: 0,
      isLoading: false

    };
  },
  components: {
    [Field.name]:Field,
    [Button.name]:Button,
    [cellGroup.name]:cellGroup,
    [Icon.name]:Icon,
    [PullRefresh.name]:PullRefresh    
  },
  created() {
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    onSubmit() {    
      // 验证      
      this.$validator.validateAll().then(result => {
        if (result) {
         //axios提交
        }else{
         this.$toast( this.errors.items[0].msg)
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.about{
  background: #999
}
</style>