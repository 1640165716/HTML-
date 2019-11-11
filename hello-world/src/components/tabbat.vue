<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/main/home" icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item to="/main/recover" icon="bars">分类</van-tabbar-item>
    <van-tabbar-item to="/main/Shopcar" icon="cart">购物车</van-tabbar-item>
    <van-tabbar-item to="/main/mine" icon="smile">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {}
};
</script>
<style lang="stylus"></style>