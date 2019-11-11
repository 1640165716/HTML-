<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(n,index) in arr" :key="index">
      <img :src="n.url" alt="图片加载中" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      arr: [
        { url: "https://img02.hua.com/slider/18_birthday_m.jpg?830" },
        { url: "https://img02.hua.com/slider/18_youflower_m.jpg?830" },
        { url: "https://img02.hua.com/slider/19_day1111_m.jpg" },
        { url: "https://img02.hua.com/slider/17_banner_tx_m.jpg" }
      ]
    };
  },
  methods: {}
};
</script>>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>