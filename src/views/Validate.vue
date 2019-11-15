<template>
  <div class="main pdb-50">
    <base-header title="验证" :left-arrow="true">
      <div slot="right">validate</div>
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
      <van-field
        v-model="phone2"
        v-validate="'mobile'"
        data-vv-name="手机号"
        label="手机号"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="phone3"
        v-validate="'mobile'"
        data-vv-name="手机号"
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="phone4"
        v-validate="'mobile'"
        data-vv-name="手机号"
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="phone5"
        v-validate="'mobile'"
        data-vv-name="手机号"
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="phone6"
        v-validate="'mobile'"
        data-vv-name="手机号"
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="phone7"
        v-validate="'mobile'"
        data-vv-name="手机号"
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="phone8"
        v-validate="'mobile'"
        data-vv-name="手机号"
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="phone9"
        v-validate="'mobile'"
        data-vv-name="手机号"
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="phone10"
        v-validate="'mobile'"
        data-vv-name="手机号"
        label="手机号"
        placeholder="请输入手机号"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <van-field
        v-model="phone11"
        v-validate="'mobile'"
        data-vv-name="手机号"
        label="手机号"
        placeholder="请输入手机号"
      />
    </van-cell-group>

    <div class="pd-5 border-box" style="position: fixed;bottom:0; width:100%">
      <van-button @click="onSubmit" fixed type="primary" size="normal" block round>普通按钮2</van-button>
    </div>
  </div>
</template>

<script>
//http://vee-validate.logaretm.com/v2/guide/
import "@/unit/validate";
import { Field, cellGroup, Button, Toast } from "vant";

export default {
  name: "validate",
  data() {
    return {
      username: "",
      phone: "",
      phone2: "",
      phone3: "",
      phone4: "",
      phone5: "",
      phone6: "",
      phone7: "",
      phone8: "",
      phone9: "",
      phone10: "",
      phone11: ""
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [cellGroup.name]: cellGroup
  },
  created() {},
  methods: {
    onSubmit() {
      // 验证
      this.$validator.validateAll().then(result => {
        if (result) {
          //提交
          this.$toast("成功");
        } else {
          Toast("失败失败失败失败失败失败");
          //this.$toast(this.errors.items[0].msg);
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