<template>
  <div class="main pdb-50">
    <base-header
      title="验证"
      :left-arrow="true"
    >
      <div slot="right"> validate </div> 
    </base-header>
 
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
        </van-cell-group>
        
       <div class="pd-15">
        <van-button @click="onSubmit" type="primary" size="normal" block round>普通按钮</van-button>
       </div>
    </div>
  
</template>

<script>
//http://vee-validate.logaretm.com/v2/guide/
import '@/config/validate'
import { Field,cellGroup,Button } from 'vant';

export default {
  name: "validate",
  data() {
    return {
       username:'',
       phone:'',
    };
  },
  components: {
    [Field.name]:Field,
    [Button.name]:Button,
    [cellGroup.name]:cellGroup    
  },
  created() {
  },
  methods: {
    onSubmit() {
      // 验证      
      this.$validator.validateAll().then(result => {
        if (result) {
         //提交
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