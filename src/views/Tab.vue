<template>
  <div class="main">
    <base-header
      title="关于"
      :left-arrow="true"
    >
      <div slot="right"> about </div> 
    </base-header>
 
       <van-tabs>
          <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
            内容 {{ index }}
          </van-tab>
        </van-tabs>       

    </div>
  
</template>

<script>
import '@/config/validate'
import { Tab, Tabs } from 'vant';

export default {
  name: "about",
  data() {
    return {
       username:'',
       phone:'',
    };
  },
  components: {
    [Tab.name]:Tab,
    [Tabs.name]:Tabs
  },
  created() {
  },
  methods: {
    onSubmit() { console.log('12');
    
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