<template>
  <div class="icon-item">
    <van-grid :column-num="4">
      <van-grid-item
        v-for="(value,index) in arr"
        :key="index"
        :icon="value.icon"
        :text="value.name"
      />
    </van-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
import { Icon } from "vant";
Vue.use(Icon);
Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      arr: [
        { name: "优惠券", icon: "coupon-o" },
        { name: "权益卡", icon: "vip-card-o" },
        { name: "余额", icon: "gold-coin-o" },
        { name: "会员积分", icon: "gem-o" },
        { name: "收货地址", icon: "location-o" },
        { name: "生日纪念提醒", icon: "birthday-cake-o" },
        { name: "我的收藏", icon: "star-o" },
        { name: "浏览记录", icon: "clock-o" }
      ]
    };
  }
};
</script>
<style scoped>
.icon-item {
  margin: 0 0.57142857rem;
  margin-top: 0.57142857rem;
}
</style>