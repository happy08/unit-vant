<template>
  <div class="main">
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
        
        <van-cell-group>
          <van-field
            v-model="sms"
            v-validate="'required|digits:6'"
            center
            clearable
            data-vv-name="短信验证码" 
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <count-down :phone="phone" slot="button"></count-down>
          </van-field>
        </van-cell-group>

       <div class="pd-15">
        <van-button @click="onSubmit" type="danger" size="normal" block round>普通按钮</van-button>
       </div>
    </div>
  
</template>

<script>

import '@/config/validate'  //http://vee-validate.logaretm.com/v2/guide/ 文档
import { Field,cellGroup,Button } from 'vant';
import CountDown from '@/components/CountDown.vue'

export default {
  name: "validate",
  data() {
    return {
       username:'',
       phone:'',
       sms:''
    };
  },
  components: {
    [Field.name]:Field,
    [Button.name]:Button,
    [cellGroup.name]:cellGroup,
    CountDown 
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