<template>
  <div>
    <div>
      <nav class="filter">
        <div class="filter-item">综合</div>
        <div class="filter-item">销量</div>
        <div class="filter-item">价格</div>
        <div class="filter-item">新品</div>
      </nav>
    </div>
    <van-tabs v-model="active">
      <van-tab title="送女友">
        <div class="product-list">
          <div class="product-item-vertical" v-for="value in 12" :key="value">
            <div class="product-item-pic">
              <img src="https://img01.hua.com/uploadpic/newpic/9012177.jpg_220x240.jpg" alt="不变的承诺" />
            </div>
            <div class="product-item-info">
              <p class="product-item-info-name">不变的承诺·99枝红玫瑰</p>
              <div class="product-item-info-bottom">
                <p class="product-item-info-prices">
                  <strong data-id="9012177">¥539</strong>
                </p>
              </div>
            </div>
          </div>
          <div style="clear: both;"></div>
        </div>
      </van-tab>
      <van-tab title="送男性">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item"></van-cell>
        </van-list>
      </van-tab>
      <van-tab title="送朋友">内容 3</van-tab>
      <van-tab title="送长辈">内容 2</van-tab>
      <van-tab title="销量">内容 3</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { List } from "vant";
import { Cell } from "vant";

Vue.use(List);
Vue.use(Cell);
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
<style scoped>
.filter {
  display: flex;
  background: #fff;
  height: 3.14285714rem;
  line-height: 3.14285714rem;
}
.filter-item {
  flex: 1;
  text-align: center;
}
.product-list {
  margin-top: 0.57142857rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.product-item-vertical {
  background: #fff;
  width: 48%;
  box-sizing: border-box;
  padding: 0rem 0.28571429rem;
  margin-bottom: 0.57142857rem;
}
.product-item-info {
  padding: 0.57142857rem 0.57142857rem 1.14285714rem;
  height: 4.85714286rem;
}
.product-item-info-name {
  font-size: 0.85714286rem;
  font-weight: 300;
  line-height: 1.6;
}
.product-item-info-bottom {
  margin-left: 0.57142857rem;
  margin-top: 1.14285714rem;
}
</style>