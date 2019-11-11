<template>
  <div class="head">
    <div class="head-left" @click="returns">
      <van-icon name="arrow-left" size="30px" />
    </div>
    <div class="head-center">
      <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt="花礼网" />
    </div>
    <div class="head-right">
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
.head {
  display: flex;
  background: #fff;
  height: 3.14285714rem;
  line-height: 3.14285714rem;
}
.head-left {
  width: 6.28571429rem;
  text-align: left;
  line-height: 4.14285714rem;
}
.head-center {
  flex: 1;
  text-align: center;
}
img {
  width: auto;
  height: 1.5rem;
}
.head-right {
  width: 6.28571429rem;
  text-align: center;
  line-height: 4.14285714rem;
}
</style>