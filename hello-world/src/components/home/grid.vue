<template>
  <van-grid :column-num="5">
    <van-grid-item v-for="(n,index) in arr" :key="index" :icon="n.url" :text="n.name" />
  </van-grid>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";

Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      arr: [
        {
          url: "https://img02.hua.com/m/home/img/m_home_category_flower.png",
          name: "鲜花"
        },
        {
          url: "https://img02.hua.com/m/home/img/m_home_category_ppf.png",
          name: "永生花"
        },
        {
          url: "https://img02.hua.com/m/home/img/m_home_category_cake.png",
          name: "蛋糕"
        },
        {
          url: "https://img02.hua.com/m/home/img/m_home_category_gift.png",
          name: "礼品"
        },
        {
          url: "https://img02.hua.com/m/home/img/m_home_category_chocolate.png",
          name: "巧克力"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style  scoped></style>>