<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
    <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
    <van-goods-action-button color="#3D4D42" type="warning" text="加入购物车" @click="onClickButton" />
    <van-goods-action-button color="#FF734C" type="danger" text="立即购买" @click="onClickButton" />
  </van-goods-action>
</template>
<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
export default {
  methods: {
    onClickIcon() {},
    onClickButton() {
      this.$router.push({
        name: "order"
      });
    }
  }
};
</script>