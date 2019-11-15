<template>
  <div class="main main-child pdb-50">
    <base-header title="关于" :left-arrow="true"></base-header>

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
 
    <van-field
      v-model="phone"
      v-validate="'mobile'"
      data-vv-name="手机号"
      label="手机号"
      placeholder="请输入手机号"
    />
    <van-button @click="onSubmit" type="primary" size="normal" block round>普通按钮</van-button>
  </div>
</template>

<script>
import "@/unit/validate";
import { NavBar, Field, cellGroup, Button } from "vant";

export default {
  name: "about",
  data() {
    return {
      username: "",
      phone: ""
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [Button.name]: Button,
    [cellGroup.name]: cellGroup
  },
  created() {
    //console.log("25553");
  },
  activated() {
    //console.log("23");
  },
  methods: {
    onSubmit() {
      // 验证
      this.$validator.validateAll().then(result => {
        if (result) {
          //axios提交
        } else {
          this.$toast(this.errors.items[0].msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  background: #999;
}
</style>