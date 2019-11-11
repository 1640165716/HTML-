<template>
  <div class="thirdparty-login">
    <div class="thirdparty">
      <van-icon name="wechat" size="25px" style="vertical-align: middle" />
      <span>微信</span>
    </div>
    <div class="thirdparty">
      <van-icon name="alipay" size="25px" style="vertical-align: middle" />
      <span>支付宝</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {};
</script>
<style scoped>
.thirdparty-login {
  display: flex;
  height: 100%;
  background: #fff;
  margin-top: 80px;
}
.thirdparty {
  text-align: center;
  flex: 1;
  height: 44px;
  line-height: 44px;
  font-size: 12px;
  color: #71797f;
}
</style>