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
        { name: "联系客服", icon: "service-o" },
        { name: "帮助中心", icon: "question-o" },
        { name: "关于花礼", icon: "warning-o" },
        { name: "设置", icon: "setting-o" }
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