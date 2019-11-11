<template>
  <div style="display:flex">
    <div class="revert">
      <a @click="returnTo">
        <van-icon name="arrow-left" size="30px" style="line-height: 3.14rem" />
      </a>
    </div>
    <div class="searchText">
      <van-search placeholder="搜索鲜花、蛋糕、礼品" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
import { Search } from "vant";

Vue.use(Search);
Vue.use(Icon);
export default {
  data() {
    return {};
  },
  methods: {
    returnTo() {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>
<style scoped>
a {
  width: 3.14rem;
  height: 3.4rem;
  display: block;
  text-align: center;
  color: inherit;
  background: #fff;
}
.searchText {
  flex: 1;
}
</style>