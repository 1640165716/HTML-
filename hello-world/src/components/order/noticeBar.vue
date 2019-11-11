<template>
  <van-notice-bar :scrollable="false" left-icon="volume-o">
    未注册可在此页面直接下单，已有花礼网账户
    <span @click="resigner">请登入</span>
  </van-notice-bar>
</template>
<script>
import Vue from "vue";
import { NoticeBar } from "vant";

Vue.use(NoticeBar);
export default {
  methods: {
    resigner() {
      this.$router.push({
        name: "logon"
      });
    }
  }
};
</script>
<style scoped>
span {
  border-radius: 100px;
  color: #fff;
  background: #ff734c;
  text-align: center;
  font-size: 10px;
  padding: 2px 8px;
}
</style>