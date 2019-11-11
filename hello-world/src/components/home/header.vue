<template>
  <header class="headerbar">
    <div class="headerbar-left">
      <van-icon name="bars" size="25px" @click="search" />
    </div>
    <div class="headerbar-logo">
      <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" />
    </div>
    <div class="headerbar-right">
      <van-icon name="service" size="25px" />
    </div>
  </header>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  data() {
    return {};
  },
  methods: {
    search() {
      this.$router.push({
        name: "recover"
      });
    }
  }
};
</script>


<style scoped>
.headerbar {
  display: flex;
  flex: 1;
  height: 3.42857143rem;
  align-items: center;
  justify-content: space-between;
  background: #435448;
  overflow: hidden;
  color: #fff;
}
img {
  width: 10.71428571rem;
}
.headerbar-left {
  width: 3.48rem;
  height: 3.42rem;
  line-height: 4.42rem;
  text-align: center;
}
.headerbar-right {
  width: 3.48rem;
  height: 3.42rem;
  text-align: center;
  line-height: 4.42rem;
}
</style>
