<template>
  <van-nav-bar title="提交订单" left-arrow @click-left="onClickLeft" />
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "detail"
      });
    }
  }
};
</script>
<style scoped>
</style>