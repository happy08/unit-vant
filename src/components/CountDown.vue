<template>
  
    <div class="count-down">
        <van-button type="warning" size="small" v-show="sendCode" :disabled="!sendCode"  @click="ObtainCode()">获取验证码</van-button>
        <van-button type="warning" size="small" v-show="!sendCode" disabled>{{authTime}}s后重新获取</van-button>
    </div>
  
</template>
<script>
import { Button } from 'vant';
export default {
  name: 'CountDown',
  props:{
    phone:{
      type:String,
      required:true,  //必填
      default:''
    },
    code:{
      type:[String,null],
      required:false,
      default:null
    },
  },
  data () {
    return{
      sendCode: true, // 控制发送验证码按钮显示
      authTime: 0, // 倒计时
    }
  },
  components: {
    [Button.name]: Button
  },
 
  methods: {
    /**
     * 获取验证码
     */
    ObtainCode () {
      if (this.code !== null) {
        //校验验证码
        this.$toast('校验验证码……')
        return
      }

      if (this.phone=='' || this.phone==undefined) {
        this.$toast('请填写手机号')
        return
      } else if (!this.$unit.isPhone(this.phone)) {
        this.$toast('手机号输入有误')
        return
      }
      this.sendCode = false  // 控制显示隐藏
      this.authTime = 60
      let timeInt = setInterval(() => {
        this.authTime--
        if (this.authTime <= 0) {
          this.sendCode = true
          window.clearInterval(timeInt)
        }
      }, 1000)
    }
 
  }
}
</script>