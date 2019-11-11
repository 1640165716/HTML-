<template>
  <div class="conpany-info">
    <van-icon name="checked">认证龙头企业</van-icon>
    <van-icon name="checked">14年品牌</van-icon>
    <van-icon name="checked">3小时送花</van-icon>
    <van-icon name="checked">最近338019条好评</van-icon>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.conpany-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 1.57rem;
  width: auto;
  line-height: 1.57rem;
  text-align: center;
  font-size: 0.78571429rem;
  background: #fff;
}
</style>