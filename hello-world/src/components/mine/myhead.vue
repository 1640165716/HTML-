<template>
  <van-nav-bar title="个人中心" left-text="返回" left-arrow @click-left="onClickLeft" />
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  methods: {
    onClickLeft() {}
  }
};
</script>
<style scoped>
</style>