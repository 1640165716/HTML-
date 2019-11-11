<template>
  <div class="headerbar">
    <div class="headerbar-left" @click="returns">
      <div class="navigation">
        <van-icon name="arrow-left" size="30px" />
      </div>
    </div>
    <div class="headerbar-center">
      <p class="headerbar-content">送女友鲜花</p>
    </div>
    <div class="headerbar-right">
      <!-- <van-icon name="service-o" size="30px" /> -->
      <van-icon name="wap-nav" size="30px" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  methods: {
    returns() {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>
<style scoped>
.headerbar {
  display: flex;
  height: 3.14285714rem;
  line-height: 3.14285714rem;
  background: #fff;
}
.headerbar-left {
  width: 6.28571429rem;
  height: 3.14285714rem;
  line-height: 4.14285714rem;
}
.headerbar-center {
  flex: 1;
  text-align: center;
}
.headerbar-right {
  width: 6.28571429rem;
  height: 3.14285714rem;
  line-height: 4.14285714rem;
  text-align: right;
  padding-right: 1rem;
}
</style>