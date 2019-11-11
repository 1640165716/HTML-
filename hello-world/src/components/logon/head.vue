<template>
  <div class="header-bar">
    <div class="header-bars" @click="revert">
      <van-icon name="cross" size="20px" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  methods:{
    revert(){
      this.$router.push({
        name:'mine'
      })
    }
  }
};
</script>
<style scoped>
.header-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #fff;
  text-align: center;
}
.header-bars {
  width: 44px;
  height: 44px;
}
</style>